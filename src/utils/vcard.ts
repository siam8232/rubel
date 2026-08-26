import { PROFILE_DATA } from '../data/profileData';

export function downloadVCard(): void {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Md Rubel Mia',
    'N:Mia;Md Rubel;;;',
    'ORG:Jihad Hardware & Electronics',
    'TITLE:Proprietor',
    `TEL;TYPE=CELL,VOICE,PREF:${PROFILE_DATA.callNumber}`,
    `TEL;TYPE=WHATSAPP,MSG:${PROFILE_DATA.whatsappNumber}`,
    `TEL;TYPE=WORK,AGENT:${PROFILE_DATA.contacts.find((c) => c.type === 'bkash-agent')?.number || ''}`,
    'ADR;TYPE=WORK,POSTAL:;;হলদিবাড়ি\\, কাউনিয়া;রংপুর;;;বাংলাদেশ',
    `NOTE:Proprietor — Jihad Hardware & Electronics. Call/WhatsApp: ${PROFILE_DATA.callNumber}, Bkash/Nagad Personal: 01930313640, Bkash Agent: 01310499958`,
    `URL:${PROFILE_DATA.facebookUrl}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Md_Rubel_Mia.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
