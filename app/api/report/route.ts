import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const OWNER_ID = process.env.TELEGRAM_OWNER_ID!

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { username, amount, source, txHash, description } = body

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'Unknown'

    const timestamp = new Date().toISOString()

    const lines = [
      `🚨 *NEW SCAM REPORT — blocklender.info*`,
      ``,
      `📅 *Time:* \`${timestamp}\``,
      `🌐 *IP Address:* \`${ip}\``,
      ``,
    ]

    if (username) lines.push(`👤 *Username:* \`${escapeMarkdown(username)}\``)
    if (amount) lines.push(`💰 *Amount Lost:* \`${escapeMarkdown(amount)}\``)
    if (source) lines.push(`📍 *Found Via:* ${escapeMarkdown(source)}`)
    if (txHash) lines.push(`🔗 *TX Hash/URL:* \`${escapeMarkdown(txHash)}\``)
    if (description) {
      lines.push(``)
      lines.push(`📝 *Description:*`)
      lines.push(escapeMarkdown(description))
    }

    lines.push(``)
    lines.push(`─────────────────`)
    lines.push(`_Submitted via blocklender.info_`)

    const message = lines.join('\n')

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    const tgRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: OWNER_ID,
        text: message,
        parse_mode: 'Markdown',
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

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')
}
