import { TG_CHANNEL_ID } from "../const/TG_CHANNEL_ID"
import { TOKEN_senaev_com_bot } from "../const/TOKEN_senaev_com_bot"

export async function sendTelegramMessage(text: string): Promise<void> {
    const url = `https://api.telegram.org/bot${TOKEN_senaev_com_bot}/sendMessage`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHANNEL_ID, text }),
    })
    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Telegram API error: ${res.status} ${err}`)
    }
  }
  