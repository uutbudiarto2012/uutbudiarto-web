"use client"
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
export default function ShareSocial() {
  return (
    <div className="flex-1 flex justify-end gap-2">
      <FacebookShareButton url="google.com">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url="google.com">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton url="google.com">
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url="google.com">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  )
}
