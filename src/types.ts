export interface ContactItem {
  id: string;
  type: 'call' | 'whatsapp' | 'bkash-personal' | 'nagad-personal' | 'bkash-agent';
  label: string;
  sublabel: string;
  number: string;
  rawNumber: string;
  actionType: 'call' | 'whatsapp' | 'copy';
  actionUrl?: string;
  buttonText: string;
  badge?: string;
  accentColor: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  username: string;
  iconType: 'facebook' | 'whatsapp';
  color: string;
}

export interface ProfileData {
  name: string;
  banglaName: string;
  identity: string;
  location: string;
  mapsUrl: string;
  intro: string;
  image: string;
  callNumber: string;
  callNumberRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  facebookUrl: string;
  contacts: ContactItem[];
  socials: SocialLink[];
  developer: {
    name: string;
    title: string;
    phone: string;
    phoneRaw: string;
    image: string;
    text: string;
  };
}
