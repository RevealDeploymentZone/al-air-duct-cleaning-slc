import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '8 Warning Signs Your Salt Lake City Home Needs Air Duct Cleaning',
  description: 'Discover the 8 most common warning signs that your SLC home needs air duct cleaning. From visible dust to rising energy bills — know when to call a pro.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/blog/signs-air-ducts-need-cleaning-slc' },
}

export default function BlogPost2() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-blue-300 text-sm mb-3">
            <Link href="/blog" className="hover:text-white">Blog</Link> › Warning Signs
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">8 Warning Signs Your Salt Lake City Home Needs Air Duct Cleaning Right Now</h1>
          <div className="flex gap-4 text-blue-200 text-sm">
            <span>July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-xl text-gray-700 font-medium mb-8">
          Most homeowners never think about their air ducts until something goes obviously wrong. But by then, your family has often been breathing contaminated air for months — sometimes years. Salt Lake City's unique combination of winter inversions, summer wildfire smoke, and desert dust means ducts get dirty faster here than almost anywhere else in the country. Here are the eight warning signs you should never ignore.
        </p>

        <p className="text-gray-700 mb-8">Knowing when to schedule <Link href="/services/air-duct-cleaning" className="text-blue-700 font-semibold hover:underline">professional air duct cleaning in Salt Lake City</Link> can save you money on energy bills, protect your HVAC equipment, and — most importantly — protect your family's respiratory health.</p>

        <div className="space-y-10">
          {[
            {
              num: '01',
              title: 'Visible Dust or Debris Around Your Vents',
              body: `This is the most obvious sign, and it's one you can check right now. Walk to your nearest supply vent or return air register and look closely. Do you see a ring of gray dust, dark buildup, or debris clinging to the grille? If dust is visible on the outside of the vent, there's almost certainly far more inside the duct itself.\n\nThis is especially common in Salt Lake City homes during and after Utah's dry summer months, when fine particulate matter and outdoor dust infiltrate homes more aggressively. If you're seeing visible buildup at more than one vent, it's time to call a professional.`,
            },
            {
              num: '02',
              title: 'Your Home Gets Dusty Very Quickly After Cleaning',
              body: `Do you dust your furniture and find it coated again within a day or two? Do you notice fine gray films settling on countertops, bookshelves, and TV screens unusually fast? Excessive rapid dust accumulation is one of the most telling signs that your duct system is redistributing contamination throughout your home every time your HVAC runs.\n\nYour heating and cooling system circulates the air in your home 5 to 7 times every day. If your ducts are packed with dust, dander, and debris, each cycle blows that material back into your living spaces. No amount of surface cleaning will solve this problem until the source — dirty ductwork — is addressed.`,
            },
            {
              num: '03',
              title: 'Musty, Stale, or Unusual Odors When HVAC Runs',
              body: `Pay attention the next time your furnace or air conditioner kicks on. Do you notice a musty, stale, or "dusty" smell coming from your vents? Any odor — whether musty, moldy, pet-related, or just generally unpleasant — that appears when your HVAC system runs is a red flag.\n\nMusty odors in particular can indicate mold or mildew growth inside your ductwork. Salt Lake City homes are particularly susceptible to this during the transition seasons (spring and fall) when temperature swings create condensation inside ducts. If you suspect mold in your system, it's important to get a proper <Link href="/services/mold-inspection-removal">mold inspection and duct cleaning</Link> rather than just a standard cleaning — mold requires specific treatment protocols.`,
            },
            {
              num: '04',
              title: 'Worsening Allergy or Asthma Symptoms Indoors',
              body: `Salt Lake City is consistently ranked among the worst US cities for allergy sufferers, largely due to its geography and air quality challenges. But if you or family members notice that allergy or asthma symptoms are worse inside your home than outside — or that symptoms improve significantly when you're away from home — dirty air ducts may be the culprit.\n\nDucts accumulate pollen, pet dander, dust mites, mold spores, and other allergens over time. Every time your system runs, it pushes these irritants into your breathing air. According to the <a href="https://www.epa.gov/indoor-air-quality-iaq" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">EPA's indoor air quality guidelines</a>, indoor air can be 2 to 5 times more polluted than outdoor air — and dirty ductwork is a primary contributor.`,
            },
            {
              num: '05',
              title: "Your Energy Bills Have Increased Without Explanation",
              body: `If your heating and cooling costs have crept up over the past year or two without any obvious cause — no new appliances, no significant weather changes, no rate increases — restricted airflow from dirty ducts may be the reason.\n\nWhen ductwork is clogged with debris, your HVAC system has to work harder to push conditioned air through the system. This increases run time, wears out components faster, and drives up your utility bills. The U.S. Department of Energy estimates that 25 to 40 percent of heating and cooling energy is wasted due to inefficient duct systems. Cleaning your ducts can restore proper airflow and bring those bills back down. Pair a duct cleaning with our <Link href="/services/hvac-cleaning" className="text-blue-700 hover:underline">full HVAC cleaning service</Link> for maximum efficiency gains.`,
            },
            {
              num: '06',
              title: 'Recent Home Renovation or Construction',
              body: `Did you recently remodel a bathroom, finish a basement, add a room, or do any significant construction work in your home? Construction and renovation work generates enormous amounts of fine dust — drywall dust, insulation fibers, sawdust, and concrete particles — that find their way into your duct system.\n\nUnlike ordinary household dust, construction debris often contains materials that are particularly irritating to respiratory systems. If you had major work done in the last two years and haven't had your ducts cleaned since, schedule a cleaning soon. This is one situation where the <a href="https://www.nadca.com/homeowners/when-to-get-ducts-cleaned" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">NADCA (National Air Duct Cleaners Association)</a> specifically recommends cleaning regardless of time elapsed since the last service.`,
            },
            {
              num: '07',
              title: 'You Have Pets — Especially Heavy Shedders',
              body: `Pet owners know the struggle: fur, dander, and odors seem to get everywhere. What many don't realize is how much of that material ends up inside ductwork. Pet hair clogs filters faster, accumulates in ducts, and — in the case of pet dander — becomes a persistent airborne allergen that circulates through your HVAC system constantly.\n\nIf you have one or more dogs or cats (especially breeds that shed heavily), your ducts should be cleaned more frequently than the general recommendation. Every 2 to 3 years is appropriate for most pet households in Salt Lake City. After cleaning, consider upgrading to a MERV-11 or MERV-13 filter to capture more of what your pets produce before it enters the ductwork.`,
            },
            {
              num: '08',
              title: "You've Never Had Your Ducts Cleaned (Or It's Been Over 5 Years)",
              body: `According to the NADCA, air ducts should be cleaned every 3 to 5 years under normal conditions — and more frequently in homes with pets, allergy sufferers, smokers, or in areas with poor outdoor air quality like Salt Lake City. If you've lived in your home for several years and have never had a duct cleaning, or if it's been more than five years since the last service, it's time.\n\nThe accumulation of dust, debris, and biological contaminants in a duct system that hasn't been cleaned in 5+ years can be substantial. Beyond the air quality concerns, this buildup stresses your HVAC equipment and can contribute to component failures that are far more expensive than a duct cleaning.`,
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg">{item.num}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                {item.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: para.replace(/<Link href="([^"]+)"[^>]*>([^<]+)<\/Link>/g, '<a href="$1" class="text-blue-700 hover:underline">$2</a>').replace(/<a href="([^"]+)"[^>]*className="([^"]+)"[^>]*>([^<]+)<\/a>/g, '<a href="$1" class="$2">$3</a>') }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-10">
          <h3 className="font-bold text-gray-900 mb-2">Quick Self-Check: How Many Apply to You?</h3>
          <p className="text-gray-700 text-sm">If 2 or more of these warning signs apply to your home, it is strongly recommended to schedule a professional duct inspection. If 4 or more apply, consider this urgent — particularly if anyone in your household has asthma, allergies, or other respiratory conditions.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Happens During a Professional Duct Cleaning?</h2>
        <p className="text-gray-700 mb-4">A professional <Link href="/services/residential-air-duct-cleaning" className="text-blue-700 hover:underline">residential air duct cleaning</Link> in Salt Lake City typically takes 2 to 4 hours for a standard single-family home. A reputable company will:</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Perform a pre-cleaning inspection and explain what they find</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Use truck-mounted or high-powered portable vacuum equipment connected directly to your main duct trunk</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Clean all supply and return air ducts, registers, and grilles</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Clean the air handler, blower, and accessible HVAC components</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Offer optional <Link href="/services/sanitization-deodorization" className="text-blue-700 hover:underline">antimicrobial sanitization treatment</Link> to kill remaining bacteria and mold spores</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold mt-1">✓</span> Show you before-and-after results</li>
        </ul>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8">
          <p className="font-semibold text-gray-900 mb-2">See any of these signs in your home?</p>
          <p className="text-gray-600 mb-4">Schedule a free estimate with Salt Lake City's top-rated duct cleaning team — no obligation, honest assessment.</p>
          <Link href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Schedule Free Inspection
          </Link>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-3">Related Articles:</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog/air-duct-cleaning-cost-salt-lake-city" className="text-blue-700 hover:underline">Air Duct Cleaning Cost in Salt Lake City: 2026 Pricing Guide</Link></li>
            <li><Link href="/blog/how-often-clean-air-ducts-utah" className="text-blue-700 hover:underline">How Often Should You Clean Air Ducts in Utah?</Link></li>
            <li><Link href="/blog/air-duct-cleaning-allergies-utah" className="text-blue-700 hover:underline">Does Air Duct Cleaning Help with Allergies in SLC?</Link></li>
          </ul>
        </div>
      </article>
    </div>
  )
}
