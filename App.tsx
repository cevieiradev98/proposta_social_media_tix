import React from 'react';
import { Section } from './components/Section';
import {
  SERVICE_DESCRIPTION,
  INCLUDED_ITEMS,
  PACKAGES_COMPARISON,
  PACKAGES,
  UPGRADES,
  EXCLUSIONS,
  INVESTMENT_RATIONALE,
  DIFFERENTIATORS,
  TIMELINE_AND_REVISIONS,
  COMMERCIAL_CONDITIONS,
  NEXT_STEPS,
} from './constants';
import { CheckCircleIcon, XCircleIcon, ClockIcon, SparklesIcon, CogIcon, ChatBubbleBottomCenterTextIcon, CalendarIcon, CreditCardIcon, ArrowRightIcon, ArrowsRightLeftIcon, TrendingUpIcon } from './components/IconComponents';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto py-4 px-6 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Proposta Comercial</h1>
          <p className="text-gray-500 mt-1">Gestão de Conteúdo Digital para TIX</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-8 sm:py-12 px-6 sm:px-8 space-y-12">
        <Section title="Sobre o Serviço">
          <p className="text-lg text-gray-600 leading-relaxed">{SERVICE_DESCRIPTION}</p>
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 text-lg mb-4">O que está incluído em cada entrega:</h3>
            <ul className="space-y-3">
              {INCLUDED_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        
        <Section title="Comparativo Rápido dos Pacotes">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {PACKAGES_COMPARISON.headers.map((header) => (
                    <th key={header} className="p-4 font-semibold text-gray-700 border-b">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PACKAGES_COMPARISON.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    <td className="p-4 border-b font-medium text-gray-900">{row.package}</td>
                    <td className="p-4 border-b text-gray-600">{row.carousels}</td>
                    <td className="p-4 border-b text-gray-600">{row.videos}</td>
                    <td className="p-4 border-b text-gray-600">{row.total}</td>
                    <td className="p-4 border-b font-bold text-teal-600">{row.investment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <p className="text-sm text-gray-500 mt-4 text-right">
            Valores unitários aprox.: Carrossel (6 págs) ~ R$ 178 | Vídeo ~ R$ 100 <br/>
            Nota: Meses com 5 semanas serão ajustados proporcionalmente, mediante aprovação.
           </p>
        </Section>

        <Section title="Detalhes dos Pacotes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 ${pkg.highlight ? 'border-2 border-teal-500' : 'border'}`}>
                {pkg.highlight && (
                    <div className="bg-teal-500 text-white text-center py-1 font-bold text-sm">MAIS POPULAR</div>
                )}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="text-3xl font-extrabold text-gray-900 my-3">{pkg.price}<span className="text-base font-medium text-gray-500">/mês</span></p>
                  {pkg.saving && <p className="text-sm font-semibold bg-teal-100 text-teal-800 rounded-full px-3 py-1 inline-block mb-4">{pkg.saving}</p>}
                  <p className="font-semibold text-gray-700 mb-2">{pkg.subtitle}</p>
                  <ul className="space-y-2 text-gray-600">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6">
                  <p className="text-sm text-gray-800"><span className="font-bold">Ideal para:</span> {pkg.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Opções de Upgrade e Add-ons">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">Carrosséis com mais páginas</h4>
              <ul className="space-y-2">
                {UPGRADES.carousels.map((item, i) => <li key={i} className="bg-white p-3 rounded-md border">{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Add-ons para vídeos</h4>
              <ul className="space-y-2">
                {UPGRADES.videos.map((item, i) => <li key={i} className="bg-white p-3 rounded-md border">{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>
        
        <Section title="O Que Não Está Incluído">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <p className="font-semibold mb-4 text-gray-800">Para evitar surpresas, deixamos claro o que está fora do escopo:</p>
            <ul className="space-y-3">
              {EXCLUSIONS.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <XCircleIcon className="h-6 w-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600 font-medium">{EXCLUSIONS.note}</p>
          </div>
        </Section>
        
        <Section title="Por Que Esse Investimento?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">{INVESTMENT_RATIONALE.carousels.title}</h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside mb-4">
                {INVESTMENT_RATIONALE.carousels.points.map((p,i) => <li key={i}>{p}</li>)}
              </ul>
              <p className="text-sm bg-gray-100 p-3 rounded-md">{INVESTMENT_RATIONALE.carousels.time}</p>
              <p className="text-sm bg-gray-100 p-3 rounded-md mt-2">{INVESTMENT_RATIONALE.carousels.volume}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">{INVESTMENT_RATIONALE.videos.title}</h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside mb-4">
                {INVESTMENT_RATIONALE.videos.points.map((p,i) => <li key={i}>{p}</li>)}
              </ul>
              <p className="text-sm bg-gray-100 p-3 rounded-md">{INVESTMENT_RATIONALE.videos.time}</p>
            </div>
          </div>
        </Section>
        
        <Section title="Diferenciais do Serviço">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ClockIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[0] },
              { icon: <SparklesIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[1] },
              { icon: <CogIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[2] },
              { icon: <ArrowsRightLeftIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[3] },
              { icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[4] },
              { icon: <TrendingUpIcon className="h-8 w-8 text-teal-500" />, ...DIFFERENTIATORS[5] }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Prazos e Política de Revisão">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">Carrosséis</h4>
              <p className="text-gray-600">{TIMELINE_AND_REVISIONS.carousels}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">Vídeos</h4>
              <p className="text-gray-600">{TIMELINE_AND_REVISIONS.videos}</p>
            </div>
             <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">Revisões Incluídas</h4>
              <p className="text-gray-600">{TIMELINE_AND_REVISIONS.revisionsIncluded}</p>
            </div>
             <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-bold text-lg mb-3">Revisões Extras</h4>
              <p className="text-gray-600">{TIMELINE_AND_REVISIONS.extraRevisions}</p>
            </div>
          </div>
        </Section>
        
        <Section title="Condições Comerciais">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-lg border">
                <CreditCardIcon className="h-8 w-8 text-teal-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Formas de Pagamento</h4>
                <p className="text-gray-600 text-sm">{COMMERCIAL_CONDITIONS.payment}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
                <CalendarIcon className="h-8 w-8 text-teal-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Contrato</h4>
                <p className="text-gray-600 text-sm">{COMMERCIAL_CONDITIONS.contract}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
                <ArrowRightIcon className="h-8 w-8 text-teal-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Início</h4>
                <p className="text-gray-600 text-sm">{COMMERCIAL_CONDITIONS.start}</p>
            </div>
          </div>
           <p className="text-center text-sm text-gray-500 mt-6">{COMMERCIAL_CONDITIONS.validity}</p>
        </Section>

        <Section title="Próximos Passos">
            <ol className="space-y-4">
              {NEXT_STEPS.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-500 text-white font-bold mr-4">{index + 1}</span>
                  <span className="text-lg text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
        </Section>
      </main>
      
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-5xl mx-auto py-8 px-6 sm:px-8 text-center">
          <p>Proposta desenvolvida especialmente para <strong>TIX</strong></p>
          <p className="text-sm text-gray-400 mt-1">Novembro de 2025</p>
          <p className="mt-4">Estou à disposição para esclarecer qualquer dúvida e ajustar a proposta conforme necessidade.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;