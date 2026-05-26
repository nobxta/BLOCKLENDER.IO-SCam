import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const OWNER_ID = process.env.TELEGRAM_OWNER_ID!

// Verified premium custom emoji — each entry: [alt emoji, custom_emoji_id, UTF-16 length of alt]
const CE = {
  warning:  { alt: '⚠️', id: '5420323339723881652', len: 2 },
  calendar: { alt: '📅', id: '5364233403300330811', len: 2 },
  globe:    { alt: '🌐', id: '5447410659077661506', len: 2 },
  user:     { alt: '👤', id: '5408846628763217930', len: 2 },
  money:    { alt: '💰', id: '5431615341321012110', len: 2 },
  pin:      { alt: '📍', id: '5350747347724810871', len: 2 },
  link:     { alt: '🔗', id: '5271604874419647061', len: 2 },
  memo:     { alt: '📝', id: '5408905620139028881', len: 2 },
}

interface TgEntity {
  offset: number
  length: number
  type: string
  custom_emoji_id?: string
}

class MessageBuilder {
  private text = ''
  private entities: TgEntity[] = []

  private get pos(): number {
    return this.text.length // JS .length = UTF-16 code units = what Telegram expects
  }

  emoji(key: keyof typeof CE): this {
    const e = CE[key]
    this.entities.push({ offset: this.pos, length: e.len, type: 'custom_emoji', custom_emoji_id: e.id })
    this.text += e.alt
    return this
  }

  bold(s: string): this {
    this.entities.push({ offset: this.pos, length: s.length, type: 'bold' })
    this.text += s
    return this
  }

  italic(s: string): this {
    this.entities.push({ offset: this.pos, length: s.length, type: 'italic' })
    this.text += s
    return this
  }

  code(s: string): this {
    this.entities.push({ offset: this.pos, length: s.length, type: 'code' })
    this.text += s
    return this
  }

  t(s: string): this { this.text += s; return this }
  nl(): this { this.text += '\n'; return this }
  br(): this { this.text += '\n\n'; return this }
  line(): this { this.text += '━━━━━━━━━━━━━━━━━━━━━\n'; return this }

  build() { return { text: this.text, entities: this.entities } }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { username, amount, source, txHash, description } = body

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'Unknown'

    const now = new Date()
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
    })
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'UTC',
    })

    const m = new MessageBuilder()

    // Header
    m.emoji('warning').t(' ').bold('NEW SCAM REPORT').t(' ').emoji('warning')
    m.br()
    m.line()
    m.nl()

    // Meta
    m.emoji('calendar').t('  ').bold('Date:').t('  ').code(dateStr).nl()
    m.t('       ').bold('Time:').t('  ').code(`${timeStr} UTC`).nl()
    m.emoji('globe').t('  ').bold('IP:').t('  ').code(ip)
    m.br()
    m.line()

    // Fields
    if (username) {
      m.nl()
      m.emoji('user').t('  ').bold('Username').nl()
      m.t('      ').code(username).nl()
    }

    if (amount) {
      m.nl()
      m.emoji('money').t('  ').bold('Amount Lost').nl()
      m.t('      ').code(amount).nl()
    }

    if (source) {
      m.nl()
      m.emoji('pin').t('  ').bold('Found Via').nl()
      m.t('      ').t(source).nl()
    }

    if (txHash) {
      m.nl()
      m.emoji('link').t('  ').bold('TX Hash / URL').nl()
      m.t('      ').code(txHash).nl()
    }

    if (description) {
      m.nl()
      m.line()
      m.nl()
      m.emoji('memo').t('  ').bold('Description')
      m.br()
      m.italic(description).nl()
    }

    // Footer
    m.nl()
    m.line()
    m.italic('Submitted via').t(' ').bold('blocklender.info')

    const { text, entities } = m.build()

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    const tgRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: OWNER_ID,
        text,
        entities,
        disable_web_page_preview: true,
      }),
    })

    if (!tgRes.ok) {
      const err = await tgRes.text()
      console.error('Telegram API error:', err)
      return NextResponse.json({ success: false, error: 'Failed to send report' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Report submission error:', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
