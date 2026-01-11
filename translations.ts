
import { Language, TranslationSet, FAQItem } from './types';

export const translations: Record<Language, TranslationSet> = {
  ko: {
    nav: { home: '홈', services: '서비스', about: '회사소개', blog: '블로그', contact: '문의하기', faq: 'FAQ' },
    hero: {
      title: '한국 중고 수출의 새로운 기준,\nOnions Business',
      subtitle: '공군 대위 출신의 정직함과 정비 전문가의 안목으로 전 세계 바이어에게 최상의 한국 제품을 공급합니다.',
      cta: '견적 문의하기',
      cta_whatsapp: 'WhatsApp 상담'
    },
    stats: { label1: '검수 완료', label2: '수출 국가', label3: '고객 만족도' },
    services: {
      title: '전문 수출 서비스',
      description: '단순 대행을 넘어 검수, 매입, 물류까지 원스톱으로 해결합니다.',
      moq: '최소 주문 수량: 컨테이너 단위',
      process_title: '어니언 스탠다드 서비스 5단계',
      process_steps: [
        { title: '1단계: 빠른 견적 & 맞춤 소싱', desc: '바이어 요청 즉시 견산. 전국 야드 네트워크를 활용해 타이어, 차량, 가전 등 최적의 재고를 24시간 내 확인합니다.' },
        { title: '2단계: 철저한 품질 검수', desc: '5,000평 야드에서 전문가가 직접 검수합니다. 타이어 등급 분류 및 차량 엔진/외관 상태를 사진과 영상으로 공유합니다.' },
        { title: '3단계: 수출 등록 & 서류 완벽 처리', desc: '자동차 말소등록부터 수출신고필증 발급까지 모든 행정 절차를 대행하여 바이어의 번거로움을 없앱니다.' },
        { title: '4단계: 최적 선적 및 물류', desc: 'RORO선 또는 컨테이너 선적 중 최적의 배편을 확보합니다. 실시간 위치 추적으로 안전한 도착을 보장합니다.' },
        { title: '5단계: 통관 지원 & A/S 보장', desc: '목적지 세관 통관 대행 지원 및 품질 클레임 발생 시 투명한 환불/재발송 정책으로 파트너십을 유지합니다.' }
      ],
      items: {
        tires: { title: '중고 타이어', desc: 'A/B/C 등급 정밀 분류 및 5년 이내 연식 보장.' },
        cars: { title: '중고 자동차', desc: '전국 옥션 및 폐차장 네트워크 기반 최적가 매입.' },
        machinery: { title: '건설 장비', desc: '정비 전문가가 직접 엔진/유압 계통 성능 검증.' },
        appliances: { title: '중고 가전제품', desc: '바이어 요청에 따른 대량 소싱 및 컨테이너 적재.' },
        clothing: { title: '중고 의류', desc: '선별된 퀄리티의 의류 대량 수출.' }
      }
    },
    blog: {
      title: '현장 소식',
      subtitle: '실시간 매물 정보와 5000평 야드의 생동감을 확인하세요.',
      sections: {
        yards: '협력 폐차장 & 인프라',
        inventory: '실시간 추천 매물',
        tour: '야드 투어 (5,000평)',
        reviews: '글로벌 바이어 후기'
      }
    },
    about: {
      title: 'Onion의 철학',
      story_title: '정직한 군인 정신으로 세상을 잇다',
      story_content: '공군 대위 출신 대표가 직접 발로 뜁니다. 불필요한 마진을 줄이고 고품질 한국 제품을 정직하게 공급하는 것이 저의 사명입니다. 5000평 규모의 야드와 정비 자격증을 보유한 전문가로서 타협 없는 품질을 약속합니다.',
      mission_title: '미션 & 비전',
      mission_content: '신뢰를 바탕으로 전 세계에 거점을 마련하여, 각 국가의 어려운 비즈니스 문제를 해결해주는 진정한 글로벌 파트너가 되겠습니다.',
      expertise_title: '핵심 역량',
      expertise_list: ['5000평 규모 직영 야드 보유', '자동차 정비 자격증 보유', '관세/통관 전문 지식', '전국 폐차장/경매장 네트워크']
    },
    contact: {
      title: '글로벌 파트너십',
      subtitle: '품목, 수량, 목적지 항구를 남겨주시면 신속하게 견적을 드립니다.',
      form_name: '성함/회사명',
      form_email: '이메일 주소',
      form_message: '문의 내용 (품목, 수량, 예산 등)',
      form_submit: '문의 보내기'
    }
  },
  en: {
    nav: { home: 'Home', services: 'Services', about: 'About', blog: 'Blog', contact: 'Contact', faq: 'FAQ' },
    hero: {
      title: 'New Standard in Korean Exports,\nOnions Business',
      subtitle: 'Led by a former Air Force Captain with mechanical expertise, delivering premium Korean goods to global buyers.',
      cta: 'Get a Quote',
      cta_whatsapp: 'WhatsApp Chat'
    },
    stats: { label1: 'Inspected Items', label2: 'Countries', label3: 'Satisfaction' },
    services: {
      title: 'Expert Export Services',
      description: 'Beyond simple agency, we provide one-stop solutions from inspection to logistics.',
      moq: 'MOQ: Container Units',
      process_title: 'Onion Standard: 5-Step Process',
      process_steps: [
        { title: 'Step 1: Fast Quote & Custom Sourcing', desc: 'Instant feedback on inquiries. We leverage our network to source the best tires, vehicles, and appliances within 24 hours.' },
        { title: 'Step 2: Rigorous Quality Inspection', desc: 'Conducted at our 5,000-pyeong yard. We share detailed photos and videos of tire grades and engine performance.' },
        { title: 'Step 3: Flawless Documentation', desc: 'We handle all administrative tasks, from vehicle deregistration to export declarations, ensuring a hassle-free process.' },
        { title: 'Step 4: Optimal Shipment & Logistics', desc: 'Securing the best RORO or container routes. Real-time tracking ensures safe and timely global delivery.' },
        { title: 'Step 5: Customs Support & Warranty', desc: 'Support with destination customs and a transparent refund/resend policy to ensure long-term partnerships.' }
      ],
      items: {
        tires: { title: 'Used Tires', desc: 'Precise A/B/C grading and guaranteed under 5 years old.' },
        cars: { title: 'Used Vehicles', desc: 'Optimal sourcing via nationwide auctions and networks.' },
        machinery: { title: 'Heavy Machinery', desc: 'Engine and hydraulic performance verified by experts.' },
        appliances: { title: 'Used Appliances', desc: 'Bulk sourcing and container loading per request.' },
        clothing: { title: 'Used Clothing', desc: 'Exporting selected quality clothing in bulk.' }
      }
    },
    blog: {
      title: 'Showcase',
      subtitle: 'Live inventory and the massive 5,000-pyeong yard experience.',
      sections: {
        yards: 'Infrastructure & Networks',
        inventory: 'Live Inventory',
        tour: 'Yard Tour (5,000-pyeong)',
        reviews: 'Global Reviews'
      }
    },
    about: {
      title: 'Philosophy',
      story_title: 'Connecting World with Military Integrity',
      story_content: 'As a former Air Force Captain, I value honesty above all. My mission is to provide high-quality Korean products at fair prices. With a 5,000-pyeong yard and technical certification, I promise uncompromising quality.',
      mission_title: 'Mission & Vision',
      mission_content: 'To build a global presence rooted in trust, helping partners overcome local supply challenges.',
      expertise_title: 'Key Strengths',
      expertise_list: ['Owns 5,000-pyeong yard', 'Certified Mechanic', 'Customs Expertise', 'Nationwide Network']
    },
    contact: {
      title: 'Global Partnership',
      subtitle: 'Provide item, quantity, and port for a fast quote.',
      form_name: 'Name/Company',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send Inquiry'
    }
  },
  jp: {
    nav: { home: 'ホーム', services: 'サービス', about: '会社紹介', blog: 'ブログ', contact: 'お問い合わせ', faq: 'FAQ' },
    hero: {
      title: '韓国輸出の新しい基準、\nOnions Business',
      subtitle: '元空軍大尉としての誠実さと整備専門家の確かな目で、世界中のバイヤーへ最高品質の韓国製品をお届けします。',
      cta: '見積もり依頼',
      cta_whatsapp: 'WhatsApp相談'
    },
    stats: { label1: '検品済み', label2: '輸出先国', label3: '顧客満足度' },
    services: {
      title: '専門輸出サービス',
      description: '単なる代行を超え、検品、買収、物流までワンストップで解決します。',
      moq: '最小注文数量: コンテナ単位',
      process_title: 'オニオン・スタンダード5段階サービス',
      process_steps: [
        { title: '1段階：迅速な見積もりと調達', desc: 'お問い合わせ後、24時間以内に全国のネットワークから最適なタイヤ、車両、家電などの在庫を確認し回答します。' },
        { title: '2段階：徹底した品質検品', desc: '5,000坪の自社ヤードで専門家が直接検品。摩耗度やエンジン状態を写真と動画でバイヤーに共有します。' },
        { title: '3段階：輸出登録と書類の完璧な処理', desc: '車両の抹消登録から輸出申告まで、すべての行政手続きを代行し、バイヤーの負担をゼロにします。' },
        { title: '4段階：最適船積みと物流', desc: 'RORO船またはコンテナ船の最適なルートを確保。リアルタイムの追跡で安全な到着を保証します。' },
        { title: '5段階：通関サポートとアフターサービス', desc: '目的地の通関支援および万が一の品質クレームにも透明性の高い返金・再発送ポリシーで対応します。' }
      ],
      items: {
        tires: { title: '中古タイヤ', desc: 'A/B/Cランク別の精密分類、5年以内の年式を保証。' },
        cars: { title: '中古車', desc: '国内オークションおよびヤードネットワークを通じた最適車両の調達。' },
        machinery: { title: '建設機械', desc: '掘削機、フォークリフトなど中古建設機械の専門輸出。' },
        appliances: { title: '中古家電製品', desc: 'バイヤーの要望に合わせたカスタマイズ調達。' },
        clothing: { title: '中古衣類', desc: '厳選された品質の衣類を大量輸出。' }
      }
    },
    blog: {
      title: 'フィールドニュース',
      subtitle: 'リアルタイムの在庫情報と5000坪ヤードの臨場感を確認してください。',
      sections: {
        yards: '協力解体業者 & インフラ',
        inventory: 'リアルタイムおすすめ商品',
        tour: 'ヤードツアー (5,000坪)',
        reviews: 'グローバルバイヤーのレビュー'
      }
    },
    about: {
      title: 'Onionの哲学',
      story_title: '軍人精神で世界を繋ぐ',
      story_content: '元空軍大尉の代表が自ら現場で動きます。不当な中間マージンを排除し、高品質な韓国製品を適正価格で提供することが私の使命です。',
      mission_title: 'ミッション & ビジョン',
      mission_content: '信頼をベースに世界中に拠点を構え、各国のビジネス課題を解決できるグローバルパートナーを目指します。',
      expertise_title: 'コアコンピタンス',
      expertise_list: ['5000坪の自社ヤード保有', '自動車整備士資格保有', '通関に関する深い知識', '広範なネットワーク']
    },
    contact: {
      title: 'グローバルパートナーシップ',
      subtitle: 'お名前、数量、目的港をご記入いただければ迅速に回答いたします。',
      form_name: 'お名前/会社名',
      form_email: 'メールアドレス',
      form_message: 'お問い合わせ内容',
      form_submit: '送信する'
    }
  },
  es: {
    nav: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', blog: 'Blog', contact: 'Contacto', faq: 'FAQ' },
    hero: {
      title: 'Nuevo Estándar en Exportaciones Coreanas,\nOnions Business',
      subtitle: 'Liderado por un ex capitán de la Fuerza Aérea con experiencia mecánica, entregando bienes coreanos premium.',
      cta: 'Cotizar',
      cta_whatsapp: 'WhatsApp'
    },
    stats: { label1: 'Inspeccionados', label2: 'Países', label3: 'Satisfacción' },
    services: {
      title: 'Servicios de Exportación',
      description: 'Más que una agencia, brindamos soluciones integrales desde inspección hasta logística.',
      moq: 'MOQ: Unidades de Contenedor',
      process_title: 'Estándar Onion: Proceso de 5 Pasos',
      process_steps: [
        { title: 'Paso 1: Cotización Rápida', desc: 'Respuesta inmediata a consultas. Buscamos el mejor inventario de llantas y vehículos en menos de 24 horas.' },
        { title: 'Paso 2: Inspección de Calidad', desc: 'Realizada en nuestro patio de 5,000 pyeong. Compartimos fotos y videos detallados de cada ítem.' },
        { title: 'Paso 3: Documentación Perfecta', desc: 'Gestionamos todos los trámites administrativos, desde la baja del vehículo hasta la declaración de exportación.' },
        { title: 'Paso 4: Envío y Logística Óptima', desc: 'Aseguramos las mejores rutas de RORO o contenedores con seguimiento en tiempo real.' },
        { title: 'Paso 5: Soporte de Aduanas y Garantía', desc: 'Apoyo en aduanas de destino y política de reembolso transparente para asegurar asociaciones a largo plazo.' }
      ],
      items: {
        tires: { title: 'Llantas Usadas', desc: 'Clasificación A/B/C y garantía de menos de 5 años.' },
        cars: { title: 'Vehículos Usados', desc: 'Abastecimiento óptimo mediante subastas nacionales.' },
        machinery: { title: 'Maquinaria Pesada', desc: 'Rendimiento de motor e hidráulico verificado.' },
        appliances: { title: 'Electrodomésticos Usados', desc: 'Abastecimiento masivo según solicitud.' },
        clothing: { title: 'Ropa Usada', desc: 'Exportación de ropa de calidad seleccionada en masa.' }
      }
    },
    blog: {
      title: 'Showcase',
      subtitle: 'Inventario en vivo y la experiencia del patio de 5,000 pyeong.',
      sections: {
        yards: 'Infraestructura y Redes',
        inventory: 'Inventario en Vivo',
        tour: 'Tour del Patio (5,000 pyeong)',
        reviews: 'Reseñas Globales'
      }
    },
    about: {
      title: 'Filosofía',
      story_title: 'Integridad Militar en la Exportación',
      story_content: 'Como ex capitán de la Fuerza Aérea, valoro la honestidad. Mi misión es ofrecer productos de calidad a precios justos.',
      mission_title: 'Misión y Visión',
      mission_content: 'Construir una presencia global basada en la confianza.',
      expertise_title: 'Fortalezas',
      expertise_list: ['Patio de 5,000 pyeong', 'Mecánico certificado', 'Experto en Aduanas', 'Red Nacional']
    },
    contact: {
      title: 'Asociación Global',
      subtitle: 'Indique ítem, cantidad y puerto para una cotización rápida.',
      form_name: 'Nombre/Empresa',
      form_email: 'Correo',
      form_message: 'Mensaje',
      form_submit: 'Enviar'
    }
  },
  zh: {
    nav: { home: '首页', services: '服务', about: '关于', blog: '博客', contact: '联系我们', faq: '常见问题' },
    hero: {
      title: '韩国二手出口的新标准，\nOnions Business',
      subtitle: '由前空军上尉诚信经营，结合专业机械维护眼光，为全球客户提供顶尖韩国二手产品。',
      cta: '咨询报价',
      cta_whatsapp: 'WhatsApp 咨询'
    },
    stats: { label1: '检测完成', label2: '出口国家', label3: '客户满意度' },
    services: {
      title: '专业出口服务',
      description: '超越简单的代理，我们提供从检测、采购到物流的一站式解决方案。',
      moq: '最小起订量：集装箱单位',
      process_title: 'Onion 标准服务 5 步流程',
      process_steps: [
        { title: '第1步：快速报价与定制采购', desc: '即时反馈咨询。利用全国网络，在24小时内为您寻找最佳的轮胎、车辆或家电库存。' },
        { title: '第2步：严格的质量检测', desc: '在5,000坪自营场地由专家直接检测。通过照片和视频向买家展示轮胎等级及发动机性能。' },
        { title: '第3步：出口登记及完美单据处理', desc: '代办从车辆注销到出口报关的所有行政手续，确保买家无后顾之忧。' },
        { title: '第4步：最优装运与物流', desc: '确保最佳的 RORO 船或集装箱航线。实时追踪货物状态，保证准时安全到达。' },
        { title: '第5步：清关支持与售后保障', desc: '提供目的地清关支持，若发生质量投诉，我们有透明的退款/重发政策来维护长期合作。' }
      ],
      items: {
        tires: { title: '二手轮胎', desc: 'A/B/C等级精准分类，保障5年内出厂。' },
        cars: { title: '二手汽车', desc: '基于全国拍卖和报废车场网络的最佳价格采购。' },
        machinery: { title: '建设设备', desc: '由维护专家亲自验证发动机/液压系统性能。' },
        appliances: { title: '二手家电', desc: '根据客户需求进行大宗采购和集装箱装载。' },
        clothing: { title: '二手服装', desc: '出口经过精选的优质大宗服装。' }
      }
    },
    blog: {
      title: '现场新闻',
      subtitle: '查看实时库存信息和5000坪场地的生动场景。',
      sections: {
        yards: '合作车场与基础设施',
        inventory: '实时推荐库存',
        tour: '场地参观（5,000坪）',
        reviews: '全球客户评价'
      }
    },
    about: {
      title: 'Onion 的哲学',
      story_title: '以正直的军人精神连接世界',
      story_content: '前空军上尉代表亲自实地考察。减少不必要的中间环节，正直地供应高质量韩国产品是我的使命。作为拥有5000坪场地和维护资格证的专家，我们承诺绝不妥协的品质。',
      mission_title: '使命与愿景',
      mission_content: '以信任为基础在全球建立据点，成为能够解决各国业务难题的真正全球合作伙伴。',
      expertise_title: '核心能力',
      expertise_list: ['拥有5000坪自营场地', '拥有汽车维护资格证', '关税/通关专业知识', '全国报废车场/拍卖场网络']
    },
    contact: {
      title: '全球合作伙伴关系',
      subtitle: '请留下品名、数量和目的港，我们将迅速为您提供报价。',
      form_name: '姓名/公司名',
      form_email: '电子邮箱',
      form_message: '咨询内容（品名、数量、预算等）',
      form_submit: '发送咨询'
    }
  }
};

export const faqs: Record<Language, FAQItem[]> = {
  ko: [
    { question: '최소 주문 수량(MOQ)이 어떻게 되나요?', answer: '기본적으로 컨테이너 단위 거래를 선호하며, 타이어 기준 최소 500개 이상부터 시작합니다.' },
    { question: '품질 검수는 어떻게 진행되나요?', answer: '대표인 제가 직접 1차 검수를 진행하며, 타이어의 경우 마모 상태에 따라 A, B, C 등급으로 엄격히 분류합니다.' },
    { question: '결제 조건은 어떻게 되나요?', answer: '일반적으로 선금(T/T) 방식을 사용하며, 인코텀즈는 FOB 또는 CIF 조건으로 조율 가능합니다.' }
  ],
  en: [
    { question: 'What is the Minimum Order Quantity (MOQ)?', answer: 'We prefer container-based transactions, starting from 500 units for tires.' },
    { question: 'How is quality inspection performed?', answer: 'I personally oversee inspections. Tires are strictly graded A, B, or C.' },
    { question: 'What are the payment terms?', answer: 'Typically T/T (advance payment). Incoterms like FOB or CIF can be negotiated.' }
  ],
  jp: [
    { question: '最小注文数量（MOQ）はいくらですか？', answer: '基本的にコンテナ単位の取引を優先しており、最低500個（タイヤ基準）からとなります。' },
    { question: '品質検査はどのように行われますか？', answer: '代表である私が直接一次検査を行い、タイヤの場合は摩耗状態に応じてA, B, Cランクに厳格に分類します。' },
    { question: '支払い条件はどうなっていますか？', answer: '通常、前払い（T/T）方式を使用しており、インコtermsはFOBまたはCIF条件で調整可能です。' }
  ],
  es: [
    { question: '¿Cuál es la cantidad mínima de pedido (MOQ)?', answer: 'Preferimos transacciones basadas en contenedores, a partir de 500 unidades para llantas.' },
    { question: '¿Cómo se realiza la inspección de calidad?', answer: 'Yo superviso personalmente las inspecciones. Las llantas se clasifican en A, B o C.' },
    { question: '¿Cuáles son las condiciones de pago?', answer: 'Normalmente T/T (pago por adelantado). Los Incoterms como FOB o CIF son negociables.' }
  ],
  zh: [
    { question: '最小起订量 (MOQ) 是多少？', answer: '我们更倾向于以集装箱为单位的交易，轮胎的起订量通常为 500 个以上。' },
    { question: '品质检测是如何进行的？', answer: '我个人会负责初步检测。对于轮胎，我们会根据磨损程度严格划分为 A、B、C 等级。' },
    { question: '付款条件是什么？', answer: '通常采用电汇 (T/T) 预付方式，贸易术语可以根据 FOB 或 CIF 条件进行协商。' }
  ]
};
