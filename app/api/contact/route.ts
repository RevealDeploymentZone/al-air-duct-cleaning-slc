import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    // Configure transporter
    // Set these environment variables in Vercel dashboard:
    //   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    // Example: Gmail SMTP — use an App Password (not your account password)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e40af; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">New Service Inquiry</h1>
          <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">AL Air Duct Cleaning SLC — Website Contact Form</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr style="background: #fff; border-radius: 6px;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 10px; color: #111827;"><a href="tel:${phone}" style="color: #1e40af;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px 0; color: #111827;">${email || 'Not provided'}</td>
            </tr>
            <tr style="background: #fff; border-radius: 6px;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 10px; color: #111827;">${service || 'Not specified'}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #111827;">${message}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 20px; padding: 14px; background: #dbeafe; border-radius: 6px; font-size: 13px; color: #1e40af;">
            <strong>Action required:</strong> Please follow up with this customer within 1 hour during business hours.
          </div>
        </div>
        <p style="text-align: center; margin-top: 16px; font-size: 12px; color: #9ca3af;">
          Sent from saltlakecity.alairductcleaning.com
        </p>
      </div>
    `

    await transporter.sendMail({
      from: `"AL Air Duct Cleaning SLC" <${process.env.SMTP_USER}>`,
      to: 'info@alhomeservices.us',
      replyTo: email || undefined,
      subject: `New Lead: ${service || 'Service Inquiry'} — ${name}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true, message: 'Your message has been sent. We will contact you shortly!' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please call us at (385) 462-1032.' },
      { status: 500 }
    )
  }
}
