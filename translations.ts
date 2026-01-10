
import { Language, TranslationSet, FAQItem } from './types';

export const translations: Record<Language, TranslationSet> = {
  ko: {
    nav: { home: '홈', services: '서비스', about: '회사소개', contact: '문의하기', faq: '자주묻는질문' },
    hero: {
      title: '한국 중고 타이어 & 물건 수출 토탈 에이전시',
      subtitle: '검증된 품질, 합리적인 가격, 그리고 정직한 파트너십. 양파처럼 까도 까도 매력적인 수출 전문가 Onion이 함께합니다.',
      cta: '견적 문의하기',
      cta_whatsapp: 'WhatsApp 상담'
    },
    stats: { label1: '검수 완료', label2: '수출 국가', label3: '고객 만족도' },
    services: {
      title: '제공 서비스',
      description: '최소 주문 수량 500개 이상부터, 전 세계 어디든 안정적으로 공급합니다.',
      moq: '최소 주문 수량: 500개+',
      items: {
        tires: { title: '중고 타이어', desc: 'A/B/C 등급별 정밀 분류 및 5년 이내 연식 보장.' },
        cars: { title: '중고 자동차', desc: '국내 경매장 및 야드 네트워크를 통한 최적의 차량 소싱.' },
        machinery: { title: '건설 장비', desc: '굴삭기, 지게차 등 중고 건설 기계 전문 수출.' },
        others: { title: '기타 중고품', desc: '가전, 의류 등 바이어 요청에 따른 맞춤형 소싱.' }
      }
    },
    about: {
      title: 'Onion 소개',
      story_title: '정직한 군인 정신으로 세상을 잇다',
      story_content: '공군 대위 출신 대표가 직접 발로 뜁니다. 전 세계 불합리한 인건비와 중간 마진을 줄여, 평화롭고 저렴한 가격으로 고품질 한국 제품을 공급하는 것이 저의 사명입니다. 5000평 규모의 야드와 자동차 정비 자격증을 보유한 전문가로서 정직하게 거래하겠습니다.',
      mission_title: '미션 & 비전',
      mission_content: '신뢰를 바탕으로 전 세계에 거점을 마련하여, 각 국가의 어려운 비즈니스 문제를 해결해주는 진정한 글로벌 파트너가 되겠습니다.',
      expertise_title: '보유 강점',
      expertise_list: ['5000평 규모 직영 야드 보유', '자동차 정비 자격증 및 전문 지식', '관세사 지식 기반의 통관 전문성', '협력 폐차장 및 경매장 네트워크']
    },
    contact: {
      title: '파트너십 문의',
      subtitle: '성함, 수량, 목적지 항구를 남겨주시면 신속하게 답변 드립니다.',
      form_name: '성함/회사명',
      form_email: '이메일 주소',
      form_message: '문의 내용 (품목, 수량, 예산 등)',
      form_submit: '문의 보내기'
    }
  },
  en: {
    nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact', faq: 'FAQ' },
    hero: {
      title: 'Your Trusted Export Partner for Used Goods from Korea',
      subtitle: 'Reliable supply, quality control, and cost reduction. Professional agency led by a former Air Force Captain.',
      cta: 'Get a Quote',
      cta_whatsapp: 'Chat on WhatsApp'
    },
    stats: { label1: 'Inspected Items', label2: 'Export Countries', label3: 'Customer Satisfaction' },
    services: {
      title: 'Our Services',
      description: 'Stable supply worldwide with a minimum order quantity (MOQ) of 500+.',
      moq: 'MOQ: 500 units+',
      items: {
        tires: { title: 'Used Tires', desc: 'Precise grading (A/B/C) and guaranteed under 5 years old.' },
        cars: { title: 'Used Vehicles', desc: 'Sourcing the best vehicles through extensive auction networks.' },
        machinery: { title: 'Construction Equipment', desc: 'Exporting excavators, forklifts, and heavy machinery.' },
        others: { title: 'General Used Goods', desc: 'Electronics, clothing, and customized sourcing per request.' }
      }
    },
    about: {
      title: 'About Onion',
      story_title: 'Connecting the World with Military Integrity',
      story_content: 'As a former Republic of Korea Air Force Captain, I value honesty above all. My mission is to reduce unnecessary premiums and provide high-quality Korean products at fair prices worldwide. With a 5,000-pyeong yard and a background in automotive maintenance, I personally oversee every inspection.',
      mission_title: 'Mission & Vision',
      mission_content: 'To build a global presence rooted in trust, helping partners overcome local supply challenges with Korean quality.',
      expertise_title: 'Key Strengths',
      expertise_list: ['Owns a 5,000-pyeong storage yard', 'Certified automotive maintenance expert', 'Customs clearance expertise', 'Extensive junkyard & auction network']
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Please provide item details, quantity, and destination port for a fast quote.',
      form_name: 'Name/Company',
      form_email: 'Email Address',
      form_message: 'Message (Item, Qty, Budget, etc.)',
      form_submit: 'Send Inquiry'
    }
  },
  jp: {
    nav: { home: 'ホーム', services: 'サービス', about: '会社概要', contact: 'お問い合わせ', faq: 'FAQ' },
    hero: {
      title: '韓国産中古タイヤ・中古品輸出トータルエージェンシー',
      subtitle: '確かな品質、適正価格、そして誠実なパートナーシップ。元空軍大尉が率いる輸出専門家Onionがサポートします。',
      cta: '見積もり依頼',
      cta_whatsapp: 'WhatsApp相談'
    },
    stats: { label1: '検品済み', label2: '輸出先国', label3: '顧客満足度' },
    services: {
      title: '提供サービス',
      description: '最小注文数量500個から、世界中へ安定供給いたします。',
      moq: '最小注文数量: 500個+',
      items: {
        tires: { title: '中古タイヤ', desc: 'A/B/Cランク別の精密分類、5年以内の年式を保証。' },
        cars: { title: '中古車', desc: '国内オークションおよびヤードネットワークを通じた最適車両の調達。' },
        machinery: { title: '建設機械', desc: '掘削機、フォークリフトなど中古建設機械の専門輸出。' },
        others: { title: 'その他中古品', desc: '家電、衣類などバイヤーの要望に合わせたカスタマイズ調達。' }
      }
    },
    about: {
      title: 'Onionについて',
      story_title: '軍人精神で世界を繋ぐ',
      story_content: '元空軍大尉の代表が自ら現場で動きます。不当な中間マージンを排除し、高品質な韓国製品を適正価格で提供することが私の使命です。約5000坪의 야드와 자동차 정비 자격증을 보유한 전문가로서 정직하게 거래하겠습니다.',
      mission_title: 'ミッション & ビジョン',
      mission_content: '信頼をベースに世界中に拠点を構え、各国のビジネス課題を解決できるグローバルパートナーを目指します。',
      expertise_title: '当社の強み',
      expertise_list: ['5000坪規模の自社ヤード保有', '自動車整備士資格保有', '通関に関する深い知識', '広範なオークション・解体業者ネットワーク']
    },
    contact: {
      title: 'パートナーシップのお問い合わせ',
      subtitle: 'お名前、数量、目的港をご記入いただければ迅速に回答いたします。',
      form_name: 'お名前/会社名',
      form_email: 'メールアドレス',
      form_message: 'お問い合わせ内容',
      form_submit: '送信する'
    }
  },
  es: {
    nav: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', contact: 'Contacto', faq: 'Preguntas' },
    hero: {
      title: 'Su Socio de Exportación Confiable para Bienes Usados de Corea',
      subtitle: 'Suministro estable, control de calidad and reducción de costos. Agencia profesional liderada por un ex capitán de la Fuerza Aérea.',
      cta: 'Solicitar Cotización',
      cta_whatsapp: 'Chat por WhatsApp'
    },
    stats: { label1: 'Ítems Inspeccionados', label2: 'Países de Exportación', label3: 'Satisfacción' },
    services: {
      title: 'Nuestros Servicios',
      description: 'Suministro estable en todo el mundo con un pedido mínimo (MOQ) de 500 unidades.',
      moq: 'MOQ: 500 unidades+',
      items: {
        tires: { title: 'Llantas Usadas', desc: 'Clasificación precisa (A/B/C) y garantía de menos de 5 años de antigüedad.' },
        cars: { title: 'Vehículos Usados', desc: 'Abastecimiento de los mejores vehículos a través de redes de subastas.' },
        machinery: { title: 'Maquinaria de Construcción', desc: 'Exportación de excavadoras, montacargas y maquinaria pesada.' },
        others: { title: 'Bienes Usados Generales', desc: 'Electrónica, ropa y abastecimiento personalizado por solicitud.' }
      }
    },
    about: {
      title: 'Sobre Onion',
      story_title: 'Conectando al Mundo con Integridad Militar',
      story_content: 'Como ex capitán de la Fuerza Aérea de Corea, valoro la honestidad. Mi misión es reducir primas innecesarias y ofrecer productos coreanos de alta calidad a precios justos en todo el mundo. Con un patio de 5,000 pyeong y experiencia técnica, superviso cada inspección.',
      mission_title: 'Misión y Visión',
      mission_content: 'Construir una presencia global basada en la confianza, ayudando a socios a superar desafíos de suministro.',
      expertise_title: 'Nuestras Fortalezas',
      expertise_list: ['Patio de almacenamiento propio de 5,000 pyeong', 'Experto certificado en mantenimiento automotriz', 'Experiencia en despacho de aduanas', 'Amplia red de subastas y desguaces']
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Proporcione detalles del artículo, cantidad y puerto de destino.',
      form_name: 'Nombre/Empresa',
      form_email: 'Correo Electrónico',
      form_message: 'Mensaje (Ítem, Cantidad, Presupuesto, etc.)',
      form_submit: 'Enviar Consulta'
    }
  }
};

// Fixed FAQItem reference by adding it to the imports
export const faqs: Record<Language, FAQItem[]> = {
  ko: [
    { question: '최소 주문 수량(MOQ)이 어떻게 되나요?', answer: '기본적으로 컨테이너 단위 거래를 선호하며, 최소 500개(타이어 기준) 이상부터 시작합니다.' },
    { question: '품질 검수는 어떻게 진행되나요?', answer: '대표인 제가 직접 1차 검수를 진행하며, 타이어의 경우 마모 상태에 따라 A, B, C 등급으로 엄격히 분류합니다.' },
    { question: '결제 조건은 어떻게 되나요?', answer: '일반적으로 선금(T/T) 방식을 사용하며, 인코텀즈는 FOB 또는 CIF 조건으로 조율 가능합니다.' }
  ],
  en: [
    { question: 'What is the Minimum Order Quantity (MOQ)?', answer: 'We prefer container-based transactions, starting from a minimum of 500 units (for tires).' },
    { question: 'How is quality inspection performed?', answer: 'I personally oversee primary inspections. Tires are strictly graded A, B, or C based on wear and condition.' },
    { question: 'What are the payment terms?', answer: 'Typically, we use T/T (advance payment). Incoterms like FOB or CIF can be negotiated.' }
  ],
  jp: [
    { question: '最小注文数量（MOQ）はいくらですか？', answer: '基本的にコンテナ単位の取引を優先しており、最低500個（タイヤ基準）からとなります。' },
    { question: '品質検査はどのように行われますか？', answer: '代表である私が直接一次検査を行い、タイヤの場合は摩耗状態に応じてA、B、Cランクに厳格に分類します。' },
    { question: '支払い条件はどうなっていますか？', answer: '通常、前払い（T/T）方式を使用しており、インコtermsはFOBまたはCIF条件で調整可能です。' }
  ],
  es: [
    { question: '¿Cuál es la cantidad mínima de pedido (MOQ)?', answer: 'Preferimos transacciones basadas en contenedores, comenzando desde un mínimo de 500 unidades (para llantas).' },
    { question: '¿Cómo se realiza la inspección de calidad?', answer: 'Yo superviso personalmente las inspecciones primarias. Las llantas se clasifican estrictamente en A, B o C.' },
    { question: '¿Cuáles son las condiciones de pago?', answer: 'Normalmente utilizamos T/T (pago por adelantado). Los Incoterms como FOB o CIF son negociables.' }
  ]
};
