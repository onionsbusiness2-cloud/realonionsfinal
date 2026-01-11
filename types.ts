
export type Language = 'ko' | 'en' | 'jp' | 'es' | 'zh';

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface TranslationSet {
  nav: {
    home: string;
    services: string;
    about: string;
    blog: string;
    contact: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    cta_whatsapp: string;
  };
  stats: {
    label1: string;
    label2: string;
    label3: string;
  };
  services: {
    title: string;
    description: string;
    moq: string;
    process_title: string;
    process_steps: ProcessStep[];
    items: {
      tires: { title: string; desc: string; };
      cars: { title: string; desc: string; };
      machinery: { title: string; desc: string; };
      appliances: { title: string; desc: string; };
      clothing: { title: string; desc: string; };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    sections: {
      yards: string;
      inventory: string;
      tour: string;
      reviews: string;
    };
  };
  about: {
    title: string;
    story_title: string;
    story_content: string;
    mission_title: string;
    mission_content: string;
    expertise_title: string;
    expertise_list: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    form_name: string;
    form_email: string;
    form_message: string;
    form_submit: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}
