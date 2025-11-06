export const SERVICE_DESCRIPTION = `Esta proposta contempla a criação, produção e gestão estratégica de conteúdo digital para redes sociais da TIX, com foco em engajamento, autoridade de marca e geração de valor para a audiência.`;

export const INCLUDED_ITEMS = [
  'Reuniões semanais de alinhamento para definir temas e assuntos a serem abordados',
  'Estratégia de conteúdo (planejamento editorial mensal)',
  'Criação de conteúdo (copy e roteiros) para carrosséis e vídeos',
  'Pesquisa de referências e tendências do mercado',
  'Criação de layouts originais com componentes próprios no Figma',
  'Adaptação e refinamento de mensagens para o tom de voz da marca',
  'Até 2 rodadas de revisão por peça',
  'Organização e entrega em pastas estruturadas',
  'Suporte de até 5 solicitações pontuais por mês',
];

export const PACKAGES_COMPARISON = {
  headers: ['Pacote', 'Carrosséis/mês', 'Vídeos/mês', 'Total de peças', 'Investimento'],
  rows: [
    { package: 'Intensivo Completo', carousels: '28 (168 artes)', videos: '28', total: '56 peças', investment: 'R$ 6.500' },
    { package: 'Apenas Carrosséis', carousels: '28 (168 artes)', videos: '—', total: '28 peças', investment: 'R$ 5.000' },
    { package: 'Apenas Vídeos', carousels: '—', videos: '28', total: '28 peças', investment: 'R$ 2.800' },
    { package: 'Equilibrado', carousels: '20 (120 artes)', videos: '20', total: '40 peças', investment: 'R$ 5.200' },
  ]
};

export const PACKAGES = [
  {
    title: 'PACOTE 1: INTENSIVO COMPLETO',
    price: 'R$ 6.500',
    subtitle: '7 carrosséis + 7 vídeos por semana',
    deliverables: [
      '28 carrosséis completos',
      '168 artes individuais (6 slides por carrossel)',
      '28 vídeos curtos editados e finalizados',
      'Total: 56 peças de conteúdo por mês',
    ],
    saving: null,
    idealFor: 'Marcas que precisam de presença constante e desejam dominar o feed com conteúdo diário diversificado.',
    highlight: false,
  },
  {
    title: 'PACOTE 2: APENAS CARROSSÉIS',
    price: 'R$ 5.000',
    subtitle: '7 carrosséis por semana',
    deliverables: [
      '28 carrosséis completos',
      '168 artes individuais (6 slides por carrossel)',
      'R$ 178 por carrossel | R$ 29,70 por arte',
    ],
    saving: null,
    idealFor: 'Marcas focadas em educação, autoridade e conteúdo mais denso que exige leitura e reflexão.',
    highlight: false,
  },
  {
    title: 'PACOTE 3: APENAS VÍDEOS',
    price: 'R$ 2.800',
    subtitle: '7 vídeos por semana',
    deliverables: [
      '28 vídeos curtos (até 30 segundos)',
      'R$ 100 por vídeo editado',
    ],
    saving: null,
    idealFor: 'Marcas que priorizam dinamismo, alcance rápido e conteúdo de fácil consumo (formato mais viralizado atualmente).',
    highlight: false,
  },
  {
    title: 'PACOTE 4: EQUILIBRADO',
    price: 'R$ 5.200',
    subtitle: '5 carrosséis + 5 vídeos por semana',
    deliverables: [
      '20 carrosséis completos',
      '120 artes individuais (6 slides por carrossel)',
      '20 vídeos curtos editados',
      'Total: 40 peças de conteúdo por mês',
    ],
    saving: null,
    idealFor: 'Equilíbrio perfeito entre conteúdo educativo (carrosséis) e dinâmico (vídeos), mantendo presença forte.',
    highlight: false,
  }
];

export const UPGRADES = {
  carousels: [
    'Até 6 páginas: Incluso no pacote',
    'Até 8 páginas: + R$ 40 por carrossel',
    'Até 10 páginas: + R$ 90 por carrossel',
    'Acima de 10 páginas: Sob consulta',
  ],
  videos: [
    'Corte adicional em 16:9 ou 1:1: + R$ 60 por vídeo',
    'Versão sem legendas ou variação: + R$ 40 por vídeo',
    'Entrega expresso (até 48h): + 25% sobre o valor',
  ]
};

export const EXCLUSIONS = {
  items: [
    'Captação de vídeo original (estúdio, equipe, locução profissional)',
    'Compra de imagens ou vídeos de bancos pagos',
    'Trilhas sonoras com licença comercial paga',
    'Motion graphics avançado ou animações complexas',
    'Mais de 2 rodadas de revisão por peça',
    'Adaptações para plataformas não especificadas inicialmente',
    'Gestão de mídia paga ou impulsionamento',
  ],
  note: 'Importante: Prazos começam a contar após recebimento completo dos materiais e briefing do cliente.'
};

export const INVESTMENT_RATIONALE = {
  carousels: {
    title: 'Carrosséis não são "apenas imagens"',
    points: [
      '6 artes individuais criadas do zero',
      'Narrativa visual coerente entre os slides',
      'Hierarquia de informação pensada estrategicamente',
      'Design que prende atenção do 1º ao último slide',
      'Mensagem que gera valor, educa ou converte',
    ],
    time: 'Tempo estimado: 1,5–3 horas por carrossel completo',
    volume: '168 artes por mês = 1 arte nova a cada 3h (dias úteis)',
  },
  videos: {
    title: 'Vídeos não são "apenas edição"',
    points: [
      'Análise e seleção dos melhores takes/momentos',
      'Edição de ritmo e timing para manter atenção',
      'Legendagem completa e sincronizada',
      'Tratamento de áudio (quando necessário)',
      'Testes de visualização em diferentes dispositivos',
      'Exportação otimizada para cada plataforma',
    ],
    time: 'Tempo estimado: 1,0–2,5 horas por vídeo',
  },
};

export const DIFFERENTIATORS = [
    { title: 'Consistência garantida', description: 'Entregas semanais pontuais, sem atrasos.' },
    { title: 'Qualidade profissional', description: 'Componentes próprios no Figma para consistência, sem depender de templates prontos.' },
    { title: 'Visão estratégica', description: 'Conteúdo pensado para gerar resultado, não apenas "postar por postar".' },
    { title: 'Flexibilidade', description: 'Ajustes de pauta conforme demandas e oportunidades do momento.' },
    { title: 'Comunicação direta', description: 'Alinhamento constante e transparência total no processo.' },
    { title: 'Foco em Performance', description: 'Análise de métricas para otimizar o conteúdo e alcançar melhores resultados.' },
];

export const TIMELINE_AND_REVISIONS = {
  carousels: 'Organizados em calendário semanal. Prévias enviadas até terça-feira, ajustes finalizados até quinta-feira.',
  videos: 'Entrega de lote em 2-4 dias úteis após recebimento completo dos insumos.',
  revisionsIncluded: 'Até 2 rodadas de ajustes por peça, sem custo adicional.',
  extraRevisions: 'A partir da 3ª rodada: R$ 50 por peça para carrosséis, R$ 40 por peça para vídeos.',
};

export const COMMERCIAL_CONDITIONS = {
  payment: 'Mensalidade via PIX, transferência ou boleto. Vencimento até dia 5 de cada mês.',
  contract: 'Contrato mensal, sem vigência mínima, para maior flexibilidade. Cancelamento com aviso prévio de 30 dias.',
  start: 'Após assinatura do contrato e primeiro pagamento. Kick-off de alinhamento estratégico na primeira semana.',
  validity: 'Validade desta proposta: 15 dias a partir da data de envio.'
};

export const NEXT_STEPS = [
  'Escolha do pacote ideal para a TIX',
  'Assinatura do contrato',
  'Reunião de kick-off para alinhamento estratégico',
  'Início das entregas semanais',
];