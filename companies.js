const companies = {
  VNDLY: ['local', 'startup', 'vendor management', 'saas'],
  Chewy: ['e-comm', 'retailer', 'pets', 'tres comma club'],
  Barkbox: ['e-comm', 'subcription service', 'pets'],
  Frayt: ['transportation', 'shipping', 'local'],
  Coupa: ['saas', 'financial services'],
  BleacherReport: ['digital media', 'news', 'sports'],
  ScriptDrop: ['healthcare', 'startup'],
  CoverMyMeds: ['healthcare'],
  Forthlight: ['ios', 'peronsal interests', 'product/service we use'],
  PetFinder: ['pets'],
  Apex: ['local', 'logistics', 'iot'],
  Strava: ['exercise', 'location', 'social networking', 'iot', 'product/service we use'],
  AllTrails: ['personal interests'],
  PureRomance: ['local'],
  JDRF__CWD: ['healthcare', 'nonprofit'],
  Consumer_Reports: ['nonprofit', 'education'],
  Freestore_Foodbank: ['community service', 'nonprofit', 'local'],
  SpaceX: ['space', 'peronsal interests'],
  Hasbro: ['toys'],
  Hulu: ['streaming', 'digital media', 'product/service we use'],
  Headspace: ['healthcare'],
  Rover: ['gig economy', 'pets'],
  tattoo__stylist: ['product improvement need'],
  Gensuite: ['product improvement need', 'safety', 'enterprise software', 'peronsal interests'],
  Crossfit__barre3: ['product improvement need'],
  Peloton: ['iot', 'exercise', 'social networking'],
  Losant: ['iot', 'paas', 'local'],
  REI__National_Park_Service: ['peronsal interests'],
  The_Knot: ['product/service we use'],
  Simple__Stripe: ['financial services'],
  Zoom: ['communication', 'product/service we use'],
  Discord: ['communication', 'product/service we use'],
  Habitat_for_Humanity: ['nonprofit', 'community service'],
  Cincinnati_Works: ['nonprofit', 'community service', 'local', 'apprenticeship'],
  Microsoft: ['open source'],
  Shopify: ['e-comm', 'paas'],
  YNAB: ['financial serivces'],
}

let tags = {}

Object.keys(companies).map(company => {
  companies[company].map(tag => {
    if (tags[tag]) {
      tags[tag] = tags[tag] + 1
    } else {
      tags[tag] = 1
    }
  })
})

const sortable = Object.keys(tags).map(tag => ({ tag: tag, count: tags[tag] }))
const sorted = sortable.sort((a,b) => b.count - a.count)

console.table(sorted)