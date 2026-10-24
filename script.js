/* =====================================================================
   NPTEL Practice Hub — script.js (vanilla JavaScript, no dependencies)

   DATA NOTES
   - QUESTIONS holds all 130 questions imported from "w0 TO w12.txt"
     (Weeks 0–12, 10 questions each, 4 options each).
   - The accepted answer is stored as TEXT (not a position), so shuffling
     options can never break answer checking.
   - The source file contains no explanations, so none are shown.
   - Scoring: 1 point per correct answer, no negative marking.
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. QUESTION BANK
     ------------------------------------------------------------------ */
  const QUESTIONS_RAW = [
    {"week": 0, "assignment": 0, "questionNumber": 1, "question": "The geographical area within which a species can naturally be found is its:", "options": ["Tolerance", "Abundance", "Range", "Affluence"], "answer": "Range"},
    {"week": 0, "assignment": 0, "questionNumber": 2, "question": "Excess nitrogen fertilizer enters a pond, causes algal growth, and later creates oxygen-poor conditions. This process shows disturbance in:", "options": ["Political geography", "Biogeochemical cycles", "Cartographic methods", "Habitat selection"], "answer": "Biogeochemical cycles"},
    {"week": 0, "assignment": 0, "questionNumber": 3, "question": "The discipline of Demography is most closely related to:", "options": ["Phytogeography", "Zoogeography", "Population Geography", "Economic Geography"], "answer": "Population Geography"},
    {"week": 0, "assignment": 0, "questionNumber": 4, "question": "A dam traps sediment upstream, reducing the amount of silt reaching a delta. The likely result is:", "options": ["Expansion of the ozone layer", "Increase in coral shell formation", "Change in the geomorphology of the delta", "Increase in ultraviolet radiation"], "answer": "Change in the geomorphology of the delta"},
    {"week": 0, "assignment": 0, "questionNumber": 5, "question": "The quantum of human impacts can be written as", "options": ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"], "answer": "I = P X A X T"},
    {"week": 0, "assignment": 0, "questionNumber": 6, "question": "A large continuous forest is split by a highway into two smaller patches, each too small to support wide-ranging animals. This is:", "options": ["Habitat degradation", "Habitat displacement", "Habitat loss", "Habitat fragmentation"], "answer": "Habitat fragmentation"},
    {"week": 0, "assignment": 0, "questionNumber": 7, "question": "Increased atmospheric carbon dioxide dissolves into oceans and makes survival difficult for organisms with calcium carbonate shells. This is mainly due to:", "options": ["Nitrogen fixation", "Ozone formation", "Ocean acidification", "Soil waterlogging"], "answer": "Ocean acidification"},
    {"week": 0, "assignment": 0, "questionNumber": 8, "question": "The Trinity explosion of 1945 is taken as the beginning of the", "options": ["Holocene", "Cenocene", "Anthropocene", "Eocene"], "answer": "Anthropocene"},
    {"week": 0, "assignment": 0, "questionNumber": 9, "question": "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called", "options": ["translocation", "migration", "dispersal", "drifting"], "answer": "dispersal"},
    {"week": 0, "assignment": 0, "questionNumber": 10, "question": "Sustainable harvest of resources falls under the category of:", "options": ["conservation", "preservation", "environmentalism", "none of the above"], "answer": "conservation"},
    {"week": 1, "assignment": 1, "questionNumber": 1, "question": "The regular, seasonal movement of animals, often along fixed routes is called", "options": ["translocation", "migration", "dispersal", "drifting"], "answer": "migration"},
    {"week": 1, "assignment": 1, "questionNumber": 2, "question": "The systematic approach to Geography was developed by:", "options": ["Alexander von Humboldt", "Karl Ritter", "Rene Descartes", "Eratosthenes"], "answer": "Alexander von Humboldt"},
    {"week": 1, "assignment": 1, "questionNumber": 3, "question": "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about", "options": ["autophagy", "allelophagy", "autopathy", "allelopathy"], "answer": "allelopathy"},
    {"week": 1, "assignment": 1, "questionNumber": 4, "question": "A lake still exists physically, but sewage and plastic waste reduce the number of fish it can support. This is best called:", "options": ["Habitat degradation", "Habitat fragmentation", "Jump dispersal", "Secular dispersal"], "answer": "Habitat degradation"},
    {"week": 1, "assignment": 1, "questionNumber": 5, "question": "“Science of relationships between organisms and their environments” is the definition of:", "options": ["conservation", "preservation", "environmentalism", "ecology"], "answer": "ecology"},
    {"week": 1, "assignment": 1, "questionNumber": 6, "question": "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for", "options": ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"], "answer": "Liebig’s law of the minimum"},
    {"week": 1, "assignment": 1, "questionNumber": 7, "question": "In the word root for conservation, con stands for", "options": ["together", "to keep", "house", "manage"], "answer": "together"},
    {"week": 1, "assignment": 1, "questionNumber": 8, "question": "In the word root for conservation, servare stands for", "options": ["together", "to keep", "house", "manage"], "answer": "to keep"},
    {"week": 1, "assignment": 1, "questionNumber": 9, "question": "The Geographical discipline of Climatology is most closely related to:", "options": ["Geology", "Meteorology", "Hydrology", "Pedology"], "answer": "Meteorology"},
    {"week": 1, "assignment": 1, "questionNumber": 10, "question": "Good climate is a", "options": ["chemical factor", "demographic factor", "push factor", "pull factor"], "answer": "pull factor"},
    {"week": 2, "assignment": 2, "questionNumber": 1, "question": "Mount Fuji is an example of", "options": ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"], "answer": "Stratovolcano"},
    {"week": 2, "assignment": 2, "questionNumber": 2, "question": "The main source of magma is", "options": ["Crust", "Mantle", "Outer core", "Inner core"], "answer": "Mantle"},
    {"week": 2, "assignment": 2, "questionNumber": 3, "question": "Which of these is not a method of absolute dating?", "options": ["radioisotope dating", "thermoluminescence dating", "inclusion study", "fission track dating"], "answer": "inclusion study"},
    {"week": 2, "assignment": 2, "questionNumber": 4, "question": "What are planetesimals?", "options": ["Fully formed gas giants", "Fragments of continental crust", "Small bodies formed from gas and dust that can accrete into planets", "Layers of volcanic ash within a mountain"], "answer": "Small bodies formed from gas and dust that can accrete into planets"},
    {"week": 2, "assignment": 2, "questionNumber": 5, "question": "Hawaiian volcanoes are an example of", "options": ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"], "answer": "Shield volcano"},
    {"week": 2, "assignment": 2, "questionNumber": 6, "question": "Which of these is true about P waves?", "options": ["They are longitudinal in nature", "They are transverse in nature", "They cannot move through gases", "They cannot move through liquids"], "answer": "They are longitudinal in nature"},
    {"week": 2, "assignment": 2, "questionNumber": 7, "question": "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as", "options": ["Principle of fossil succession", "Principle of original horizontality", "Principle of superposition", "Principle of cross-cutting relationships"], "answer": "Principle of fossil succession"},
    {"week": 2, "assignment": 2, "questionNumber": 8, "question": "Which set contains only terrestrial planets?", "options": ["Jupiter, Saturn, Uranus, Neptune", "Earth, Jupiter, Mars, Saturn", "Mercury, Venus, Uranus, Neptune", "Mercury, Venus, Earth, Mars"], "answer": "Mercury, Venus, Earth, Mars"},
    {"week": 2, "assignment": 2, "questionNumber": 9, "question": "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as", "options": ["Principle of superposition", "Principle of original horizontality", "Principle of lateral continuity", "Principle of inclusions"], "answer": "Principle of lateral continuity"},
    {"week": 2, "assignment": 2, "questionNumber": 10, "question": "Deccan traps are an example of", "options": ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"], "answer": "Flood basalt province"},
    {"week": 3, "assignment": 3, "questionNumber": 1, "question": "Mudrock is an example of", "options": ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"], "answer": "siliciclastic rock"},
    {"week": 3, "assignment": 3, "questionNumber": 2, "question": "Carbonation is an example of", "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"], "answer": "chemical weathering"},
    {"week": 3, "assignment": 3, "questionNumber": 3, "question": "“green or black coloured inosilicate minerals forming prism or needle-like crystals” is a description of", "options": ["amphiboles", "feldspar", "mica", "pyroxene"], "answer": "amphiboles"},
    {"week": 3, "assignment": 3, "questionNumber": 4, "question": "Hydrolysis is an example of", "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"], "answer": "chemical weathering"},
    {"week": 3, "assignment": 3, "questionNumber": 5, "question": "Which of these is an example of exogenic process?", "options": ["volcanism", "earthquake", "plate tectonics", "deposition"], "answer": "deposition"},
    {"week": 3, "assignment": 3, "questionNumber": 6, "question": "Which statement best explains why streak is often more useful than surface colour for mineral identification?", "options": ["Streak measures the density of the mineral", "Surface colour never changes in minerals", "Streak shows the colour of the powdered mineral and may reduce the effect of minor impurities", "Streak reveals the age of the mineral"], "answer": "Streak shows the colour of the powdered mineral and may reduce the effect of minor impurities"},
    {"week": 3, "assignment": 3, "questionNumber": 7, "question": "Which factor is listed as an independent control over landform development?", "options": ["Mineral streak", "Crystal habit", "Knife-blade hardness", "Stability of sea level"], "answer": "Stability of sea level"},
    {"week": 3, "assignment": 3, "questionNumber": 8, "question": "Sandstone is an example of", "options": ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"], "answer": "siliciclastic rock"},
    {"week": 3, "assignment": 3, "questionNumber": 9, "question": "“tendency to break in given directions producing relatively plane surfaces” is known as", "options": ["cleavage", "fracture", "lustre", "streak"], "answer": "cleavage"},
    {"week": 3, "assignment": 3, "questionNumber": 10, "question": "Slow cooling of magma results in", "options": ["smooth grained sedimentary rocks", "coarse grained sedimentary rocks", "smooth grained igneous rocks", "coarse grained igneous rocks"], "answer": "coarse grained igneous rocks"},
    {"week": 4, "assignment": 4, "questionNumber": 1, "question": "Carbon sequestration in geological sites is an option for", "options": ["mitigation", "adaptation", "both of these", "none of these"], "answer": "mitigation"},
    {"week": 4, "assignment": 4, "questionNumber": 2, "question": "To reduce the effect of altitude, isobars are generally drawn after converting pressure values to", "options": ["surface temperature level", "cloud base level", "tropopause level", "sea level"], "answer": "sea level"},
    {"week": 4, "assignment": 4, "questionNumber": 3, "question": "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called", "options": ["adaptation", "mitigation", "deceleration", "maladaptation"], "answer": "adaptation"},
    {"week": 4, "assignment": 4, "questionNumber": 4, "question": "Surplus seed and sperm banking is an adaptation option to facilitate", "options": ["resistance to climate changes", "resilience to climate changes", "response to climate changes", "none of these"], "answer": "resilience to climate changes"},
    {"week": 4, "assignment": 4, "questionNumber": 5, "question": "Flights of jet planes typically occur in", "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], "answer": "Stratosphere"},
    {"week": 4, "assignment": 4, "questionNumber": 6, "question": "Heat movement through horizontal movement of air is called", "options": ["convection", "radiation", "advection", "conduction"], "answer": "advection"},
    {"week": 4, "assignment": 4, "questionNumber": 7, "question": "The classical period for taking averages for climate is", "options": ["10 years", "20 years", "30 years", "40 years"], "answer": "30 years"},
    {"week": 4, "assignment": 4, "questionNumber": 8, "question": "Noctilucent clouds are present in which layer?", "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], "answer": "Mesosphere"},
    {"week": 4, "assignment": 4, "questionNumber": 9, "question": "Atmospheric pressure is mainly caused by", "options": ["horizontal movement of clouds", "the weight of air above the point of measurement", "absorption of ultraviolet radiation", "seasonal movement of pressure belts"], "answer": "the weight of air above the point of measurement"},
    {"week": 4, "assignment": 4, "questionNumber": 10, "question": "Which of these air masses is generally warm and moist?", "options": ["cP", "cT", "mP", "mT"], "answer": "mT"},
    {"week": 5, "assignment": 5, "questionNumber": 1, "question": "What type of sediment is commonly found over abyssal plains?", "options": ["Coral fragments and gravel", "Basalt blocks and volcanic ash", "Sand and large pebbles", "Clay and silt"], "answer": "Clay and silt"},
    {"week": 5, "assignment": 5, "questionNumber": 2, "question": "Which of these is the largest habitat on the Earth?", "options": ["continental shelf", "continental slope", "guyot", "abyssal plain"], "answer": "abyssal plain"},
    {"week": 5, "assignment": 5, "questionNumber": 3, "question": "Which of these are the largest mountain ranges on Earth?", "options": ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"], "answer": "mid-oceanic ridge"},
    {"week": 5, "assignment": 5, "questionNumber": 4, "question": "Which factor helps explain why continental shelves are often highly productive?", "options": ["They are the deepest parts of the ocean floor", "They are completely isolated from runoff", "They receive both light and nutrients", "They lack sediments and organisms"], "answer": "They receive both light and nutrients"},
    {"week": 5, "assignment": 5, "questionNumber": 5, "question": "What is tidal range?", "options": ["The horizontal movement of water parallel to the beach", "The difference between sea level at high tide and low tide", "The speed at which waves approach the coast", "The movement of cold water from deep ocean layers"], "answer": "The difference between sea level at high tide and low tide"},
    {"week": 5, "assignment": 5, "questionNumber": 6, "question": "Which process converts ice and snow directly into water vapour?", "options": ["Condensation", "Precipitation", "Snowmelt", "Sublimation"], "answer": "Sublimation"},
    {"week": 5, "assignment": 5, "questionNumber": 7, "question": "Which group of factors affects the density of ocean water with depth?", "options": ["Runoff, tides and beach slope", "Hydrostatic pressure, salinity and temperature", "Wind speed, wave height and latitude only", "Sediment size, coral growth and river mouths"], "answer": "Hydrostatic pressure, salinity and temperature"},
    {"week": 5, "assignment": 5, "questionNumber": 8, "question": "“deep valleys, often cutting across continental shelves and slopes” is a description of", "options": ["oceanic deep / trench", "mid-oceanic ridge", "guyot", "submarine canyon"], "answer": "submarine canyon"},
    {"week": 5, "assignment": 5, "questionNumber": 9, "question": "Continental shelf has a gradient of", "options": ["0-1 degree", "1-2 degree", "2-5 degree", "5-10 degree"], "answer": "0-1 degree"},
    {"week": 5, "assignment": 5, "questionNumber": 10, "question": "Equal salinity curves are called", "options": ["isopycnal curves", "isohaline curves", "isotherm curves", "isobuoyant curves"], "answer": "isohaline curves"},
    {"week": 6, "assignment": 6, "questionNumber": 1, "question": "The Western Ghats act as a water divide because", "options": ["they prevent all rivers from reaching the sea", "water on opposite sides flows in different directions", "they cause all rivers to become seasonal", "they convert rivers into lakes"], "answer": "water on opposite sides flows in different directions"},
    {"week": 6, "assignment": 6, "questionNumber": 2, "question": "A river network that follows the structure and slope of the land is best described as", "options": ["discordant", "antecedent", "accordant", "centripetal"], "answer": "accordant"},
    {"week": 6, "assignment": 6, "questionNumber": 3, "question": "A tree-like river network in which smaller streams join a main channel is called", "options": ["trellis drainage", "dendritic drainage", "centripetal drainage", "rectangular drainage"], "answer": "dendritic drainage"},
    {"week": 6, "assignment": 6, "questionNumber": 4, "question": "A river system that does not match the present structure and relief of the landscape is called", "options": ["discordant drainage", "dendritic drainage", "radial drainage", "parallel drainage"], "answer": "discordant drainage"},
    {"week": 6, "assignment": 6, "questionNumber": 5, "question": "The Himalayas are primarily comprised of", "options": ["sedimentary rocks", "igneous rocks", "metamorphic rocks", "b and c"], "answer": "sedimentary rocks"},
    {"week": 6, "assignment": 6, "questionNumber": 6, "question": "Which pair of rivers is described as flowing westwards into the Arabian Sea?", "options": ["Ganga and Yamuna", "Mahanadi and Godavari", "Narmada and Tapi", "Krishna and Kaveri"], "answer": "Narmada and Tapi"},
    {"week": 6, "assignment": 6, "questionNumber": 7, "question": "Which of these are factors determining the climate of India?", "options": ["distance from the sea", "altitude", "relief", "all of these"], "answer": "all of these"},
    {"week": 6, "assignment": 6, "questionNumber": 8, "question": "Peninsular rivers usually have fixed courses mainly because", "options": ["they flow through newly formed mountains", "they carry very high sediment loads", "they are controlled only by monsoon winds", "their courses are cut into older, harder rocks"], "answer": "their courses are cut into older, harder rocks"},
    {"week": 6, "assignment": 6, "questionNumber": 9, "question": "In Koeppen classification, which is polar frost temperature?", "options": ["C", "D", "F", "T"], "answer": "F"},
    {"week": 6, "assignment": 6, "questionNumber": 10, "question": "Which of these are factors determining the climate of India?", "options": ["the latitudinal extent", "the Himalayas forming a climatic divide", "distribution of land and water", "all of these"], "answer": "all of these"},
    {"week": 7, "assignment": 7, "questionNumber": 1, "question": "Which soils are generally sandy, saline, low in moisture and commonly found in Rajasthan and Gujarat?", "options": ["Forest soils", "Arid soils", "Peaty soils", "Red and yellow soils"], "answer": "Arid soils"},
    {"week": 7, "assignment": 7, "questionNumber": 2, "question": "Cryofracturing is an example of", "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"], "answer": "physical weathering"},
    {"week": 7, "assignment": 7, "questionNumber": 3, "question": "Bangar is a type of", "options": ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"], "answer": "alluvial soil"},
    {"week": 7, "assignment": 7, "questionNumber": 4, "question": "\"the diversity that exists within an ecosystem\" is", "options": ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"], "answer": "alpha (α) biodiversity"},
    {"week": 7, "assignment": 7, "questionNumber": 5, "question": "A climax caused by wildfires is an example of", "options": ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"], "answer": "catastrophic climax"},
    {"week": 7, "assignment": 7, "questionNumber": 6, "question": "For more biodiversity, the level of disturbance should be", "options": ["less", "intermediate", "more", "none of these"], "answer": "intermediate"},
    {"week": 7, "assignment": 7, "questionNumber": 7, "question": "\"the diversity that exists among different geographies\" is", "options": ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"], "answer": "gamma (γ) biodiversity"},
    {"week": 7, "assignment": 7, "questionNumber": 8, "question": "Vertical arrangement of soil horizons is called", "options": ["soil texture", "soil structure", "soil profile", "soil science"], "answer": "soil profile"},
    {"week": 7, "assignment": 7, "questionNumber": 9, "question": "Carbonation is an example of", "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"], "answer": "chemical weathering"},
    {"week": 7, "assignment": 7, "questionNumber": 10, "question": "Which soil property refers to the arrangement of solid soil parts and pore spaces between them?", "options": ["Soil fertility", "Soil texture", "Soil horizon", "Soil structure"], "answer": "Soil structure"},
    {"week": 8, "assignment": 8, "questionNumber": 1, "question": "Which of the following is listed as an ex-situ conservation method?", "options": ["Wildlife sanctuary", "National park", "Seed bank", "Biosphere reserve"], "answer": "Seed bank"},
    {"week": 8, "assignment": 8, "questionNumber": 2, "question": "Which factor makes smaller populations especially vulnerable due to mating among close relatives?", "options": ["Habitat displacement", "Eutrophication", "Inbreeding depression", "Carbon storage"], "answer": "Inbreeding depression"},
    {"week": 8, "assignment": 8, "questionNumber": 3, "question": "Which type of species plays a much greater ecological role than expected from its abundance?", "options": ["Umbrella species", "Flagship species", "Least concern species", "Keystone species"], "answer": "Keystone species"},
    {"week": 8, "assignment": 8, "questionNumber": 4, "question": "A species found only in a single lake is rare mainly because of", "options": ["high birth rate", "limited geographical range", "high adaptability", "large home range"], "answer": "limited geographical range"},
    {"week": 8, "assignment": 8, "questionNumber": 5, "question": "Which of the following is a disadvantage of ex-situ conservation?", "options": ["It always protects the natural habitat of the species", "Captive-bred individuals may find reintroduction difficult", "It prevents all inbreeding risks automatically", "It can be planned for all species at the same time"], "answer": "Captive-bred individuals may find reintroduction difficult"},
    {"week": 8, "assignment": 8, "questionNumber": 6, "question": "In the species-area relationship, what does “S” represent?", "options": ["Size of the habitat", "Species richness", "Survival rate", "Stochastic pressure"], "answer": "Species richness"},
    {"week": 8, "assignment": 8, "questionNumber": 7, "question": "In the Clear Lake example, DDD concentration increased from water to plankton, fish, and piscivorous birds. This illustrates", "options": ["ecological redundancy", "habitat selection", "biomagnification", "ex-situ management"], "answer": "biomagnification"},
    {"week": 8, "assignment": 8, "questionNumber": 8, "question": "We prefer those areas for the creation of a conservation reserve where the level of threat is", "options": ["very high", "medium", "very low", "non-existent"], "answer": "medium"},
    {"week": 8, "assignment": 8, "questionNumber": 9, "question": "The acronym HIPPO does not include", "options": ["habitat loss", "invasive species", "pollination", "pollution"], "answer": "pollination"},
    {"week": 8, "assignment": 8, "questionNumber": 10, "question": "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as", "options": ["umbrella species", "keystone species", "flagship species", "all of the above"], "answer": "all of the above"},
    {"week": 9, "assignment": 9, "questionNumber": 1, "question": "Sex ratio is calculated as:", "options": ["Female population divided by male population multiplied by 1000", "Male population divided by female population multiplied by 1000", "Total population divided by female population multiplied by 1000", "Working population divided by dependent population multiplied by 1000"], "answer": "Female population divided by male population multiplied by 1000"},
    {"week": 9, "assignment": 9, "questionNumber": 2, "question": "Which of these is commonly observed during humanising of nature?", "options": ["environmental determinism", "possibilism", "neodeterminism", "stop and go determinism"], "answer": "possibilism"},
    {"week": 9, "assignment": 9, "questionNumber": 3, "question": "The age dependency ratio compares dependent population with:", "options": ["total female population", "working-age population", "urban population", "migrant population"], "answer": "working-age population"},
    {"week": 9, "assignment": 9, "questionNumber": 4, "question": "The logistic growth equation curve is", "options": ["I-shaped", "J-shaped", "S-shaped", "U-shaped"], "answer": "S-shaped"},
    {"week": 9, "assignment": 9, "questionNumber": 5, "question": "Which of these is a positive check according to Malthus?", "options": ["late marriage", "war", "celibacy", "moral restraint"], "answer": "war"},
    {"week": 9, "assignment": 9, "questionNumber": 6, "question": "Economic development is often measured in terms of:", "options": ["age dependency ratio", "total land area", "GDP per capita", "sex ratio"], "answer": "GDP per capita"},
    {"week": 9, "assignment": 9, "questionNumber": 7, "question": "Which of these is not a pillar of sustainability?", "options": ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"], "answer": "trans-boundary sustainability"},
    {"week": 9, "assignment": 9, "questionNumber": 8, "question": "The demographic transition sees a society move from", "options": ["high birth rate, low death rate to low birth rate, high death rate", "low birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, high death rate"], "answer": "high birth rate, high death rate to low birth rate, low death rate"},
    {"week": 9, "assignment": 9, "questionNumber": 9, "question": "Which of these is a preventive check according to Malthus?", "options": ["foresight", "vice", "misery", "flood"], "answer": "foresight"},
    {"week": 9, "assignment": 9, "questionNumber": 10, "question": "Which population group is generally treated as the working population?", "options": ["0-15 years", "15-64 years", "65 years and above", "0-15 and 65 years and above"], "answer": "15-64 years"},
    {"week": 10, "assignment": 10, "questionNumber": 1, "question": "When forests are cleared, carbon may be released not only from removed wood but also from", "options": ["ocean sediments", "glaciers", "soil organic matter", "desert sand"], "answer": "soil organic matter"},
    {"week": 10, "assignment": 10, "questionNumber": 2, "question": "Hydrogen for nuclear fusion comes under the category of", "options": ["potential resources", "actual resources", "reserve resources", "stock resources"], "answer": "stock resources"},
    {"week": 10, "assignment": 10, "questionNumber": 3, "question": "In the Rondonia rainforest example, road construction mainly contributed to forest loss by", "options": ["increasing rainfall in cleared patches", "allowing easier human access into forest areas", "preventing agricultural plots from forming", "converting cropland back into forest"], "answer": "allowing easier human access into forest areas"},
    {"week": 10, "assignment": 10, "questionNumber": 4, "question": "Oil that has not been drilled can be categorised under", "options": ["potential resources", "actual resources", "reserve resources", "stock resources"], "answer": "potential resources"},
    {"week": 10, "assignment": 10, "questionNumber": 5, "question": "Although cropland uses a smaller share of agricultural land than livestock, it contributes more to", "options": ["global calorie supply", "mineral extraction", "groundwater recharge", "built-up land expansion"], "answer": "global calorie supply"},
    {"week": 10, "assignment": 10, "questionNumber": 6, "question": "Low concentration ores come in the category of", "options": ["potential resources", "actual resources", "reserve resources", "stock resources"], "answer": "reserve resources"},
    {"week": 10, "assignment": 10, "questionNumber": 7, "question": "“those resources that have been surveyed but we lack the technology to use them” is a definition of", "options": ["potential resources", "actual resources", "reserve resources", "stock resources"], "answer": "stock resources"},
    {"week": 10, "assignment": 10, "questionNumber": 8, "question": "Which of these is the largest source of nitrogen oxides in the atmosphere?", "options": ["electricity generation", "mobile sources", "industrial processes", "waste disposal"], "answer": "mobile sources"},
    {"week": 10, "assignment": 10, "questionNumber": 9, "question": "Timber from forests that is being harvested can be categorised under", "options": ["potential resources", "actual resources", "reserve resources", "stock resources"], "answer": "actual resources"},
    {"week": 10, "assignment": 10, "questionNumber": 10, "question": "Which of these is the largest source of ammonia (NH3) in the atmosphere?", "options": ["animal manure", "mineral fertiliser", "crops and their decomposition", "human waste"], "answer": "animal manure"},
    {"week": 11, "assignment": 11, "questionNumber": 1, "question": "“the ability to produce a good using fewer inputs than another producer” is", "options": ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"], "answer": "absolute advantage"},
    {"week": 11, "assignment": 11, "questionNumber": 2, "question": "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?", "options": ["bridge underpasses", "box culverts", "pipe culverts", "all of these"], "answer": "all of these"},
    {"week": 11, "assignment": 11, "questionNumber": 3, "question": "Which mode of connection is described as requiring more money and technology to construct than roads?", "options": ["Shipping lines", "Railways", "Inland waterways", "Footpaths"], "answer": "Railways"},
    {"week": 11, "assignment": 11, "questionNumber": 4, "question": "Which of these is a factor governing barrier effect of roads?", "options": ["road edge features", "time of day and year", "species diversity in the surroundings", "all of these"], "answer": "all of these"},
    {"week": 11, "assignment": 11, "questionNumber": 5, "question": "Which of these is a factor governing barrier effect of roads?", "options": ["traffic intensity", "speed of vehicles", "driver sensitivity", "all of these"], "answer": "all of these"},
    {"week": 11, "assignment": 11, "questionNumber": 6, "question": "“the ability to produce a good at a lower opportunity cost than another producer” is a definition of", "options": ["real advantage", "monetary advantage", "comparative advantage", "opportunity advantage"], "answer": "comparative advantage"},
    {"week": 11, "assignment": 11, "questionNumber": 7, "question": "Dust released from ships can help reveal ship movement because dust particles act as:", "options": ["Fuel particles", "Noise absorbers", "Nuclei for condensation", "Ocean-current markers"], "answer": "Nuclei for condensation"},
    {"week": 11, "assignment": 11, "questionNumber": 8, "question": "Which of the following is identified as a way in which roads disturb wildlife at night?", "options": ["They reduce wind movement", "They increase soil moisture", "They create silent zones", "They cause light pollution through headlamps"], "answer": "They cause light pollution through headlamps"},
    {"week": 11, "assignment": 11, "questionNumber": 9, "question": "Which statement best describes why young male tigers or leopards may need to move away from their natal area?", "options": ["To avoid seasonal flooding", "To reduce conflict and avoid inbreeding", "To follow shipping routes", "To increase road density"], "answer": "To reduce conflict and avoid inbreeding"},
    {"week": 11, "assignment": 11, "questionNumber": 10, "question": "Oxford can best be categorised as", "options": ["mining town", "garrison town", "educational town", "religious town"], "answer": "educational town"},
    {"week": 12, "assignment": 12, "questionNumber": 1, "question": "“The conditions determined by physical, social, economic and environmental factors or processes which increase the susceptibility of an individual, a community, assets or systems to the impacts of hazards.” is a definition for", "options": ["hazard", "exposure", "vulnerability", "disaster"], "answer": "vulnerability"},
    {"week": 12, "assignment": 12, "questionNumber": 2, "question": "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.", "options": ["500 m", "1000 m", "1500 m", "2000 m"], "answer": "1500 m"},
    {"week": 12, "assignment": 12, "questionNumber": 3, "question": "Which application of photogrammetry focuses on understanding what is happening in an area rather than measuring quantities?", "options": ["Metric application", "Radiometric application", "Interpretive application", "Fiducial application"], "answer": "Interpretive application"},
    {"week": 12, "assignment": 12, "questionNumber": 4, "question": "“A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.” is a definition for", "options": ["hazard", "exposure", "vulnerability", "disaster"], "answer": "hazard"},
    {"week": 12, "assignment": 12, "questionNumber": 5, "question": "IMU stands for", "options": ["Imperial metering unit", "Inertial metering unit", "Imperial measurement unit", "Inertial measurement unit"], "answer": "Inertial measurement unit"},
    {"week": 12, "assignment": 12, "questionNumber": 6, "question": "Which application of photogrammetry is involved when the area of forest cover or the size of plantation pits is calculated?", "options": ["Interpretive application", "Metric application", "Oblique application", "Passive application"], "answer": "Metric application"},
    {"week": 12, "assignment": 12, "questionNumber": 7, "question": "Which component is essential in a GIS along with hardware and software?", "options": ["Mirror system", "Humanware", "Shutter speed", "Focal length"], "answer": "Humanware"},
    {"week": 12, "assignment": 12, "questionNumber": 8, "question": "Which of these uses revealed willingness to pay?", "options": ["market price method", "replacement cost method", "damage cost avoided method", "contingent valuation method"], "answer": "market price method"},
    {"week": 12, "assignment": 12, "questionNumber": 9, "question": "Which camera-axis orientation is intentionally tilted between vertical and horizontal?", "options": ["True vertical", "Near vertical", "Oblique", "Fiducial"], "answer": "Oblique"},
    {"week": 12, "assignment": 12, "questionNumber": 10, "question": "Which platform normally uses cameras placed at ground level with a horizontal camera orientation?", "options": ["Space-borne platform", "Air-borne platform", "Ground-borne platform", "Orbital platform"], "answer": "Ground-borne platform"}
  ];

  const DEFAULT_COURSE = 'Geography, Ecology & Conservation (editable)';
  const STORAGE_KEY = 'nptelPracticeHub.v1';
  const LETTERS = 'ABCDEFGH';

  /** Unique id for each question: week number + question number. */
  const qid = (q) => `w${q.week}-q${q.questionNumber}`;

  /** Keep only well-formed questions (defensive; all 130 are valid). */
  const QUESTIONS = QUESTIONS_RAW.filter((q) =>
    q && Array.isArray(q.options) && q.options.length >= 2 &&
    q.options.includes(q.answer) && typeof q.question === 'string' && q.question
  );
  if (QUESTIONS.length !== QUESTIONS_RAW.length) {
    console.warn('Some questions were skipped because they were malformed.');
  }
  const QMAP = {};
  QUESTIONS.forEach((q) => { QMAP[qid(q)] = q; });
  const WEEKS = [...new Set(QUESTIONS.map((q) => q.week))].sort((a, b) => a - b);
  const BY_WEEK = {};
  WEEKS.forEach((w) => { BY_WEEK[w] = QUESTIONS.filter((q) => q.week === w); });
  const ASSIGNMENT_OF = {};
  QUESTIONS.forEach((q) => { ASSIGNMENT_OF[q.week] = q.assignment; });

  /* ------------------------------------------------------------------
     2. SMALL HELPERS
     ------------------------------------------------------------------ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    const mm = String(m).padStart(2, '0'), ss = String(s).padStart(2, '0');
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }
  function fmtDate(ts) {
    try { return new Date(ts).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }); }
    catch (e) { return ''; }
  }

  const ICON = {
    book: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    target: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
    flag: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
  };

  /* ------------------------------------------------------------------
     3. STORAGE (progress, settings, bookmarks, mistakes, saved session)
     ------------------------------------------------------------------ */
  function defaultStore() {
    return {
      settings: { theme: null, course: DEFAULT_COURSE, mode: 'study', shuffleQ: false, shuffleO: false, timer: false, minutes: '' },
      attempts: [],       // completed quizzes
      attempted: {},      // id -> { ok: bool, t: timestamp } (latest result per question)
      bookmarks: [],      // question ids
      mistakes: [],       // question ids
      session: null       // in-progress quiz (for "Continue where you left off")
    };
  }

  function loadStore() {
    const base = defaultStore();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const s = JSON.parse(raw);
      if (!s || typeof s !== 'object') return base;
      return {
        settings: Object.assign(base.settings, s.settings || {}),
        attempts: Array.isArray(s.attempts) ? s.attempts : [],
        attempted: s.attempted && typeof s.attempted === 'object' ? s.attempted : {},
        bookmarks: Array.isArray(s.bookmarks) ? s.bookmarks.filter((id) => QMAP[id]) : [],
        mistakes: Array.isArray(s.mistakes) ? s.mistakes.filter((id) => QMAP[id]) : [],
        session: s.session && typeof s.session === 'object' ? s.session : null
      };
    } catch (e) {
      console.warn('Could not read saved progress:', e);
      return base;
    }
  }

  let storageWarned = false;
  function saveStore() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
    catch (e) {
      if (!storageWarned) { storageWarned = true; toast('Progress could not be saved in this browser.'); }
    }
  }

  let store = loadStore();
  let session = null;      // active quiz
  let lastResult = null;   // { session, res } of the most recently submitted quiz
  let currentView = 'home';
  let customWeeks = new Set(WEEKS);

  /* ------------------------------------------------------------------
     4. UI UTILITIES: toast, confirm dialog, theme, views
     ------------------------------------------------------------------ */
  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  function confirmDialog({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', danger = false }) {
    const d = $('#dialog');
    if (!d || typeof d.showModal !== 'function') {
      return Promise.resolve(window.confirm(`${title}\n\n${message}`));
    }
    $('#dialogTitle').textContent = title;
    $('#dialogMsg').textContent = message;
    $('#dialogOk').textContent = confirmText;
    $('#dialogOk').className = 'btn ' + (danger ? 'btn-danger' : 'btn-primary');
    $('#dialogCancel').textContent = cancelText;
    d.returnValue = 'cancel';
    return new Promise((resolve) => {
      d.addEventListener('close', () => resolve(d.returnValue === 'ok'), { once: true });
      d.showModal();
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = $('#themeBtn');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  function switchTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    store.settings.theme = next;
    applyTheme(next);
    saveStore();
  }

  function showView(name) {
    currentView = name;
    $$('.view').forEach((v) => { v.hidden = v.id !== `view-${name}`; });
    $$('[data-nav]').forEach((b) => b.classList.toggle('active', b.dataset.nav === (name === 'home' || name === 'practice' ? name : '')));
    if (name !== 'quiz') stopTimer();
    $('#nav').classList.remove('open');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    if (name === 'home') renderHome();
    if (name === 'practice') renderPractice();
    if (name === 'quiz') startTimer();
  }

  /* ------------------------------------------------------------------
     5. DASHBOARD
     ------------------------------------------------------------------ */
  function computeStats() {
    const ids = Object.keys(store.attempted).filter((id) => QMAP[id]);
    const correct = ids.filter((id) => store.attempted[id].ok).length;
    const bestPct = store.attempts.length ? Math.max(...store.attempts.map((a) => a.pct)) : null;
    return {
      total: QUESTIONS.length,
      weeks: WEEKS.length,
      attempted: ids.length,
      accuracy: ids.length ? pct(correct, ids.length) : null,
      best: bestPct
    };
  }

  function weekStats(w) {
    const ids = BY_WEEK[w].map(qid);
    const attempted = ids.filter((id) => store.attempted[id]).length;
    const runs = store.attempts.filter((a) => a.scope === 'week' && a.weeks && a.weeks[0] === w);
    const latest = runs.length ? runs[runs.length - 1] : null;
    const best = runs.length ? runs.reduce((m, a) => (a.pct > m.pct ? a : m), runs[0]) : null;
    return { total: ids.length, attempted, latest, best };
  }

  function hasResumable() {
    const s = store.session;
    return !!(s && Array.isArray(s.ids) && s.ids.length && !s.submitted && s.ids.every((id) => QMAP[id]));
  }

  function renderHome() {
    $('#courseTitle').textContent = store.settings.course;
    const st = computeStats();
    const stat = (icon, value, label, sub) =>
      `<div class="stat" title="${sub}"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`;
    $('#stats').innerHTML = [
      stat(ICON.book, st.total, 'Total questions', 'in the question bank'),
      stat(ICON.cal, st.weeks, 'Total weeks', `Week ${WEEKS[0]} to Week ${WEEKS[WEEKS.length - 1]}`),
      stat(ICON.check, st.attempted, 'Questions attempted', `of ${st.total} (unique)`),
      stat(ICON.target, st.accuracy === null ? '–' : st.accuracy + '%', 'Overall accuracy', 'latest result per question'),
      stat(ICON.trophy, st.best === null ? '–' : st.best + '%', 'Best score', 'highest single attempt')
    ].join('');

    $('#weekGrid').innerHTML = WEEKS.map((w) => {
      const ws = weekStats(w);
      const p = pct(ws.attempted, ws.total);
      const best = ws.best ? `best ${ws.best.correct}/${ws.best.total}` : 'not tried';
      const sub = ws.latest ? `latest ${ws.latest.correct}/${ws.latest.total} · ${ws.attempted}/${ws.total} tried` : `Assignment ${ASSIGNMENT_OF[w]}`;
      return `<article class="week-card" aria-label="Week ${w}">
        <div class="week-head"><span class="week-name">Week ${String(w).padStart(2, '0')}</span></div>
        <div class="week-meta"><span>${ws.total} Qs</span><b class="${ws.best ? 'got' : ''}">${best}</b></div>
        <div class="week-sub">${sub}</div>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}" aria-label="Week ${w} progress"><i style="width:${p}%"></i></div>
        <button class="btn btn-primary btn-block" data-action="start-week" data-week="${w}" aria-label="Start practice for Week ${w}">Start</button>
      </article>`;
    }).join('');
    $('#weeksCount').textContent = `${plural(WEEKS.length, 'week')} · ${plural(QUESTIONS.length, 'question')}`;
    $('#homeMistakes').textContent = store.mistakes.length
      ? `${plural(store.mistakes.length, 'question')} you got wrong. Answer one right and it leaves this list.`
      : 'Questions you get wrong appear here. Answer one right and it leaves this list.';
    $('#homeBookmarks').textContent = store.bookmarks.length
      ? `${plural(store.bookmarks.length, 'question')} bookmarked.` : 'Bookmark difficult questions while practising.';

    $('#resumeBtn').hidden = !hasResumable();
    syncSettingsUI();

    const recent = store.attempts.slice(-5).reverse();
    $('#recentWrap').hidden = !recent.length;
    $('#recentList').innerHTML = recent.map((a) =>
      `<li><span><strong>${esc(a.label)}</strong> <span class="chip">${a.mode === 'exam' ? 'Exam' : 'Study'}</span></span>
       <span><span class="chip ${a.pct >= 70 ? 'ok' : a.pct < 40 ? 'bad' : 'warn'}">${a.correct}/${a.total} · ${a.pct}%</span> <span class="muted small">${esc(fmtDate(a.date))}</span></span></li>`
    ).join('');
  }

  /* ----- Settings panel ----- */
  function syncSettingsUI() {
    const s = store.settings, f = $('#settings');
    f.elements.mode.value = s.mode;
    f.elements.shuffleQ.checked = !!s.shuffleQ;
    f.elements.shuffleO.checked = !!s.shuffleO;
    f.elements.timer.checked = !!s.timer;
    f.elements.minutes.value = s.minutes || '';
    const exam = s.mode === 'exam';
    $('#modeHelp').textContent = exam ? 'Answers stay hidden until you submit.' : 'Check each answer and see it with its accepted answer.';
    f.elements.timer.disabled = !exam;
    f.elements.minutes.disabled = !exam || !s.timer;
    $('#timerWrap').classList.toggle('disabled', !exam);
    $('#minutesWrap').classList.toggle('disabled', !exam || !s.timer);
  }
  function onSettingsChange() {
    const f = $('#settings'), s = store.settings;
    s.mode = f.elements.mode.value === 'exam' ? 'exam' : 'study';
    s.shuffleQ = f.elements.shuffleQ.checked;
    s.shuffleO = f.elements.shuffleO.checked;
    s.timer = f.elements.timer.checked;
    const m = parseInt(f.elements.minutes.value, 10);
    s.minutes = m > 0 ? Math.min(m, 600) : '';
    saveStore();
    const exam = s.mode === 'exam';
    $('#modeHelp').textContent = exam ? 'Answers stay hidden until you submit.' : 'Check each answer and see it with its accepted answer.';
    f.elements.timer.disabled = !exam;
    f.elements.minutes.disabled = !exam || !s.timer;
    $('#timerWrap').classList.toggle('disabled', !exam);
    $('#minutesWrap').classList.toggle('disabled', !exam || !s.timer);
  }

  /* ------------------------------------------------------------------
     6. PRACTICE PAGE (mixed quiz, bookmarks, mistakes, search)
     ------------------------------------------------------------------ */
  function renderPractice() {
    $('#modeNote').textContent = `${store.settings.mode === 'exam' ? 'Exam' : 'Study'} Mode${store.settings.shuffleQ ? ', shuffled questions' : ''}${store.settings.shuffleO ? ', shuffled options' : ''}`;
    $('#weekChecks').innerHTML = WEEKS.map((w) =>
      `<label><input type="checkbox" data-wk="${w}" ${customWeeks.has(w) ? 'checked' : ''}> Week ${w}</label>`).join('');
    updateCustomSummary();
    $('#bmSummary').textContent = store.bookmarks.length
      ? `${plural(store.bookmarks.length, 'question')} bookmarked.` : 'No bookmarks yet. Use the Bookmark button while practising or in the search results below.';
    $('#mbSummary').textContent = store.mistakes.length
      ? `${plural(store.mistakes.length, 'question')} answered incorrectly and waiting for another try.` : 'Nothing here yet. Questions you answer incorrectly are added automatically and removed once you answer them correctly.';
    const sw = $('#searchWeek');
    if (!sw.options.length) {
      sw.innerHTML = '<option value="all">All weeks</option>' + WEEKS.map((w) => `<option value="${w}">Week ${w}</option>`).join('');
    }
    renderSearch();
  }

  function updateCustomSummary() {
    const pool = QUESTIONS.filter((q) => customWeeks.has(q.week)).length;
    $('#customSummary').textContent = `${plural(customWeeks.size, 'week')} selected · ${plural(pool, 'question')} available`;
  }

  function startCustom() {
    const pool = QUESTIONS.filter((q) => customWeeks.has(q.week));
    if (!pool.length) { toast('Select at least one week.'); return; }
    let ids = pool.map(qid);
    const n = parseInt($('#customCount').value, 10);
    if (n > 0 && n < ids.length) ids = shuffle(ids).slice(0, n);
    startQuiz({
      ids, scope: 'mixed', weeks: Array.from(customWeeks),
      label: customWeeks.size === WEEKS.length ? 'Mixed practice · all weeks' : `Mixed practice · ${plural(customWeeks.size, 'week')}`
    });
  }

  function searchMatches() {
    const term = $('#searchInput').value.trim().toLowerCase();
    const scope = $('#searchScope').value;
    const wk = $('#searchWeek').value;
    return QUESTIONS.filter((q) => {
      const id = qid(q);
      if (wk !== 'all' && q.week !== Number(wk)) return false;
      if (scope === 'bookmarks' && !store.bookmarks.includes(id)) return false;
      if (scope === 'mistakes' && !store.mistakes.includes(id)) return false;
      if (!term) return true;
      return (q.question + ' ' + q.options.join(' ')).toLowerCase().includes(term);
    });
  }

  function renderSearch() {
    const list = searchMatches();
    $('#searchCount').textContent = `${plural(list.length, 'question')} found`;
    $('#searchResults').innerHTML = list.length ? list.map((q) => {
      const id = qid(q), bm = store.bookmarks.includes(id);
      return `<div class="sr-item">
        <div class="sr-top"><span><span class="chip">Week ${q.week}</span> <span class="chip">Q${q.questionNumber}</span>${store.mistakes.includes(id) ? ' <span class="chip bad">Mistake</span>' : ''}</span>
        <button class="bm-btn" data-action="search-bookmark" data-id="${id}" aria-pressed="${bm}">${ICON.star} ${bm ? 'Bookmarked' : 'Bookmark'}</button></div>
        <div><strong>${esc(q.question)}</strong></div>
        <ul>${q.options.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
        <details><summary>Show accepted answer</summary><p class="ans">${esc(q.answer)}</p></details>
      </div>`;
    }).join('') : '<div class="empty">No questions match your search.</div>';
  }

  /* ------------------------------------------------------------------
     7. BOOKMARKS & MISTAKE BANK
     ------------------------------------------------------------------ */
  function toggleBookmark(id) {
    if (!QMAP[id]) return false;
    const i = store.bookmarks.indexOf(id);
    if (i >= 0) store.bookmarks.splice(i, 1); else store.bookmarks.push(id);
    saveStore();
    return i < 0;
  }
  function addMistake(id) { if (QMAP[id] && !store.mistakes.includes(id)) store.mistakes.push(id); }
  function removeMistake(id) { const i = store.mistakes.indexOf(id); if (i >= 0) store.mistakes.splice(i, 1); }

  /* ------------------------------------------------------------------
     8. QUIZ SETUP & SESSION
     ------------------------------------------------------------------ */
  function startQuiz({ ids, label, scope, weeks }) {
    ids = (ids || []).filter((id) => QMAP[id]);
    if (!ids.length) { toast('There are no questions to practise here yet.'); return; }
    const s = store.settings;
    const baseIds = ids.slice();
    const order = s.shuffleQ ? shuffle(ids) : ids.slice();
    const optionOrders = {};
    order.forEach((id) => {
      const opts = QMAP[id].options.slice();
      optionOrders[id] = s.shuffleO ? shuffle(opts) : opts;   // answer is compared by text
    });
    const mode = s.mode === 'exam' ? 'exam' : 'study';
    const mins = parseInt(s.minutes, 10);
    session = {
      ids: order, baseIds, label, scope, weeks: weeks || [], mode, optionOrders,
      answers: {}, checked: {}, review: {}, idx: 0,
      startedAt: Date.now(), elapsed: 0,
      durationSec: mode === 'exam' && s.timer ? (mins > 0 ? mins * 60 : order.length * 60) : 0,
      submitted: false
    };
    persistSession();
    renderQuiz();
    showView('quiz');
  }

  function persistSession() {
    store.session = session && !session.submitted ? session : null;
    saveStore();
  }

  function resumeQuiz() {
    if (!hasResumable()) { toast('No saved quiz to continue.'); renderHome(); return; }
    const s = store.session;
    // Make sure each saved option order still matches the question bank
    const valid = s.ids.every((id) => {
      const o = s.optionOrders && s.optionOrders[id];
      return Array.isArray(o) && o.length === QMAP[id].options.length && o.every((x) => QMAP[id].options.includes(x));
    });
    if (!valid) { store.session = null; saveStore(); toast('Saved quiz was out of date and was discarded.'); renderHome(); return; }
    s.idx = Math.min(Math.max(0, s.idx | 0), s.ids.length - 1);
    s.answers = s.answers || {}; s.checked = s.checked || {}; s.review = s.review || {};
    s.elapsed = Number(s.elapsed) || 0;
    session = s;
    if (session.durationSec && session.elapsed >= session.durationSec) { finishQuiz(true); return; }
    renderQuiz();
    showView('quiz');
  }

  /* ----- Timer ----- */
  let timerId = null, lastTick = 0;
  function startTimer() {
    stopTimer();
    if (!session || session.submitted) return;
    lastTick = Date.now();
    timerId = setInterval(tick, 1000);
    updateTimerUI();
  }
  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    if (session && !session.submitted) persistSession();
  }
  function tick() {
    if (!session || session.submitted) { stopTimer(); return; }
    const now = Date.now();
    session.elapsed += Math.min((now - lastTick) / 1000, 5);
    lastTick = now;
    updateTimerUI();
    if (session.durationSec && session.elapsed >= session.durationSec) {
      toast("Time's up! Submitting your quiz…");
      finishQuiz(true);
    } else if (Math.round(session.elapsed) % 10 === 0) {
      persistSession();
    }
  }
  function updateTimerUI() {
    const el = $('#timerText');
    if (!el || !session) return;
    if (session.durationSec) {
      const left = Math.max(0, session.durationSec - session.elapsed);
      el.textContent = fmtTime(left);
      $('#timerBox').classList.toggle('low', left <= 60);
    } else {
      el.textContent = fmtTime(session.elapsed);
    }
  }

  /* ------------------------------------------------------------------
     9. RENDER QUIZ
     ------------------------------------------------------------------ */
  function renderQuiz() {
    const s = session;
    if (!s) { showView('home'); return; }
    const id = s.ids[s.idx], q = QMAP[id], total = s.ids.length;
    const sel = s.answers[id];
    const checked = !!s.checked[id];
    const study = s.mode === 'study';
    const opts = s.optionOrders[id];
    const answeredCount = Object.keys(s.answers).length;
    const bm = store.bookmarks.includes(id);
    const marked = !!s.review[id];

    const optionsHtml = opts.map((o, i) => {
      let cls = 'option';
      if (sel === o) cls += ' selected';
      if (checked) {
        cls += ' locked';
        if (o === q.answer) cls += ' correct'; else if (sel === o) cls += ' wrong';
      }
      const mark = checked && o === q.answer ? '<span class="tag" aria-hidden="true">✓</span>' : checked && sel === o ? '<span class="tag" aria-hidden="true">✗</span>' : '';
      return `<label class="${cls}"><input type="radio" name="opt" value="${i}" ${sel === o ? 'checked' : ''} ${checked ? 'disabled' : ''}>
        <span class="opt-letter" aria-hidden="true">${LETTERS[i]}</span><span class="opt-text">${esc(o)}</span>${mark}</label>`;
    }).join('');

    let feedback = '';
    if (study && checked) {
      const ok = sel === q.answer;
      feedback = `<div class="feedback ${ok ? 'ok' : 'bad'}" role="status"><strong>${ok ? 'Correct' : 'Incorrect'}</strong>
        <span class="acc">Accepted answer: <b>${esc(q.answer)}</b></span></div>`;
    }

    const palette = s.ids.map((pid, i) => {
      let cls = 'pal';
      if (s.answers[pid] !== undefined) cls += ' answered';
      if (study && s.checked[pid]) cls += s.answers[pid] === QMAP[pid].answer ? ' right' : ' wrong';
      if (s.review[pid]) cls += ' marked';
      if (i === s.idx) cls += ' current';
      return `<button class="${cls}" data-action="goto" data-i="${i}" aria-label="Question ${i + 1}${s.answers[pid] !== undefined ? ', answered' : ', not answered'}${s.review[pid] ? ', marked for review' : ''}" ${i === s.idx ? 'aria-current="true"' : ''}>${i + 1}</button>`;
    }).join('');

    const timerLabel = s.durationSec ? 'Time left' : 'Elapsed';
    const showCheck = false;   // Study Mode checks automatically when an option is clicked
    const last = s.idx === total - 1;

    $('#quizRoot').innerHTML = `
      <div class="quiz-top">
        <div>
          <div class="quiz-title">${esc(s.label)}</div>
          <div class="quiz-sub">${s.mode === 'study' ? 'Study Mode' : 'Exam Mode'}${s.scope === 'week' ? ` · Assignment ${ASSIGNMENT_OF[s.weeks[0]]}` : ''} · ${answeredCount}/${total} answered</div>
        </div>
        <div class="quiz-top-actions">
          <span class="timer" id="timerBox" title="${timerLabel}">${ICON.clock}<span class="sr-only-label" style="font-weight:600;font-size:.8rem">${timerLabel}</span> <span id="timerText"></span></span>
          <button class="btn btn-secondary" data-action="exit-quiz">Save &amp; exit</button>
          <button class="btn btn-primary" data-action="submit">Submit Quiz</button>
        </div>
      </div>
      <div class="quiz-layout">
        <div class="card q-card">
          <div class="q-meta">
            <span>Week ${q.week} · Assignment ${q.assignment} <span class="chip">Q${q.questionNumber} of the assignment</span></span>
            <span>Question ${s.idx + 1} of ${total}</span>
          </div>
          <div class="progress q-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${s.idx + 1}" aria-label="Question progress"><i style="width:${pct(s.idx + 1, total)}%"></i></div>
          <fieldset style="border:0;padding:0;margin:0;min-width:0">
            <legend class="q-text">${esc(q.question)}</legend>
            <div class="options">${optionsHtml}</div>
          </fieldset>
          ${feedback}
          <div class="q-tools">
            <button class="btn btn-secondary ${marked ? 'active-flag' : ''}" data-action="mark-review" aria-pressed="${marked}">${ICON.flag} ${marked ? 'Unmark review' : 'Mark for Review'}</button>
            <button class="btn btn-secondary" data-action="clear-selection" ${sel === undefined || checked ? 'disabled' : ''}>Clear Selection</button>
            <button class="btn btn-secondary ${bm ? 'active-flag' : ''}" data-action="bookmark" aria-pressed="${bm}">${ICON.star} ${bm ? 'Bookmarked' : 'Bookmark'}</button>
          </div>
          <div class="q-nav">
            <button class="btn btn-secondary" data-action="prev" ${s.idx === 0 ? 'disabled' : ''}>← Previous</button>
            <span class="spacer"></span>
            ${showCheck ? `<button class="btn btn-primary" data-action="check" ${checked ? 'disabled' : ''}>Check Answer</button>` : ''}
            <button class="btn ${showCheck ? 'btn-secondary' : 'btn-primary'}" data-action="${last ? 'submit' : 'next'}">${last ? 'Finish &amp; Submit' : 'Next →'}</button>
          </div>
        </div>
        <aside class="card palette-card" aria-label="Question palette">
          <h3>Question palette</h3>
          <div class="palette">${palette}</div>
          <div class="legend">
            <span style="--c:var(--primary)">Current</span>
            <span style="--c:var(--primary-soft)">Answered</span>
            <span style="--c:var(--surface-2)">Not answered</span>
            <span style="--c:var(--warn)">Marked</span>
            ${study ? '<span style="--c:var(--ok-soft)">Correct</span><span style="--c:var(--bad-soft)">Incorrect</span>' : ''}
          </div>
          <p class="palette-summary">${answeredCount} answered · ${total - answeredCount} not answered · ${Object.values(s.review).filter(Boolean).length} marked</p>
        </aside>
      </div>`;
    updateTimerUI();
  }

  /* ------------------------------------------------------------------
     10. QUIZ INTERACTIONS
     ------------------------------------------------------------------ */
  function activeId() { return session ? session.ids[session.idx] : null; }

  function selectAnswer(i) {
    const s = session;
    if (!s || s.submitted) return;
    const id = activeId();
    if (s.checked[id]) return;                   // locked after checking
    const text = s.optionOrders[id][i];
    if (text === undefined) return;              // invalid selection
    s.answers[id] = text;
    if (s.mode === 'study') s.checked[id] = true;   // Study Mode: instant green/red feedback on click
    persistSession();
    renderQuiz();
    const el = $('#quizRoot input[name="opt"]:checked');
    if (el) el.focus({ preventScroll: true });
  }

  function clearSelection() {
    const s = session, id = activeId();
    if (!s || s.submitted || s.checked[id]) return;
    delete s.answers[id];
    persistSession(); renderQuiz();
  }

  function checkAnswer() {
    const s = session, id = activeId();
    if (!s || s.submitted || s.mode !== 'study') return;
    if (s.answers[id] === undefined) { toast('Select an answer first.'); return; }
    s.checked[id] = true;
    persistSession(); renderQuiz();
  }

  function toggleReview() {
    const s = session, id = activeId();
    if (!s || s.submitted) return;
    if (s.review[id]) delete s.review[id]; else s.review[id] = true;
    persistSession(); renderQuiz();
  }

  function gotoQuestion(i) {
    const s = session;
    if (!s || s.submitted) return;
    i = Math.max(0, Math.min(s.ids.length - 1, i | 0));
    s.idx = i;
    persistSession(); renderQuiz();
    $('#quizRoot').scrollIntoView({ block: 'start' });
  }

  async function requestSubmit() {
    const s = session;
    if (!s || s.submitted) return;
    const unanswered = s.ids.filter((id) => s.answers[id] === undefined).length;
    const marked = s.ids.filter((id) => s.review[id]).length;
    if (unanswered > 0 || marked > 0) {
      const parts = [];
      if (unanswered) parts.push(`${plural(unanswered, 'question')} unanswered`);
      if (marked) parts.push(`${plural(marked, 'question')} marked for review`);
      const ok = await confirmDialog({
        title: 'Submit quiz?',
        message: `You have ${parts.join(' and ')}. Unanswered questions score 0. You can go back and finish them, or submit anyway.`,
        confirmText: 'Submit anyway', cancelText: 'Return to quiz'
      });
      if (!ok) return;
    }
    finishQuiz(false);
  }

  /* ------------------------------------------------------------------
     11. SUBMIT, RESULTS, PROGRESS SAVING
     ------------------------------------------------------------------ */
  function calculateResults(s) {
    let correct = 0, incorrect = 0, unanswered = 0;
    s.ids.forEach((id) => {
      const a = s.answers[id];
      if (a === undefined) unanswered++;
      else if (a === QMAP[id].answer) correct++;
      else incorrect++;
    });
    const total = s.ids.length;
    return { total, correct, incorrect, unanswered, pct: pct(correct, total), time: Math.round(s.elapsed) };
  }

  function finishQuiz(auto) {
    const s = session;
    if (!s || s.submitted) return;                // guards repeated submission
    s.submitted = true;
    stopTimer();
    const res = calculateResults(s);
    const now = Date.now();
    s.ids.forEach((id) => {
      const a = s.answers[id];
      if (a === undefined) return;
      const ok = a === QMAP[id].answer;
      store.attempted[id] = { ok, t: now };
      if (ok) removeMistake(id); else addMistake(id);
    });
    store.attempts.push({
      date: now, label: s.label, scope: s.scope, weeks: s.weeks, mode: s.mode,
      total: res.total, correct: res.correct, incorrect: res.incorrect, unanswered: res.unanswered,
      pct: res.pct, time: res.time, auto: !!auto
    });
    if (store.attempts.length > 300) store.attempts = store.attempts.slice(-300);
    store.session = null;
    saveStore();
    lastResult = { session: s, res };
    session = null;
    renderResults();
    showView('results');
  }

  function renderResults() {
    if (!lastResult) { showView('home'); return; }
    const { session: s, res } = lastResult;
    const R = 80, C = 2 * Math.PI * R;
    const offset = C * (1 - res.pct / 100);
    const tone = res.pct >= 70 ? 'good' : res.pct < 40 ? 'low' : '';
    const msg = res.pct === 100 ? 'Perfect score — outstanding!' : res.pct >= 70 ? 'Great work! You know this material well.' : res.pct >= 40 ? 'Good effort. Review the answers and try again.' : 'Keep practising — review the answers and retry.';
    const retryLabel = s.scope === 'week' ? 'Retry This Week' : 'Retry This Quiz';
    $('#resultsRoot').innerHTML = `
      <div class="card results-card">
        <span class="eyebrow">${esc(s.label)} · ${s.mode === 'exam' ? 'Exam Mode' : 'Study Mode'}</span>
        <h1 class="page-title">Quiz complete</h1>
        <p class="muted">${msg}</p>
        <div class="score-ring ${tone}" role="img" aria-label="Score ${res.correct} out of ${res.total}, ${res.pct} percent">
          <svg viewBox="0 0 190 190" width="190" height="190" aria-hidden="true">
            <circle class="track" cx="95" cy="95" r="${R}" fill="none" stroke-width="16"/>
            <circle class="bar" id="ringBar" cx="95" cy="95" r="${R}" fill="none" stroke-width="16" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
          </svg>
          <div class="score-center"><b>${res.correct}/${res.total}</b><span>${res.pct}%</span></div>
        </div>
        <div class="split-bar" aria-hidden="true">
          <i class="c" style="width:${pct(res.correct, res.total)}%"></i><i class="w" style="width:${pct(res.incorrect, res.total)}%"></i><i class="u" style="width:${pct(res.unanswered, res.total)}%"></i>
        </div>
        <div class="result-stats">
          <div class="rs"><b>${res.correct}/${res.total}</b>Final score</div>
          <div class="rs ok"><b>${res.correct}</b>Correct</div>
          <div class="rs bad"><b>${res.incorrect}</b>Incorrect</div>
          <div class="rs warn"><b>${res.unanswered}</b>Unanswered</div>
          <div class="rs"><b>${res.pct}%</b>Accuracy</div>
          <div class="rs"><b>${fmtTime(res.time)}</b>Time taken</div>
        </div>
        <div class="result-actions">
          <button class="btn btn-primary" data-action="open-review">Review Answers</button>
          <button class="btn btn-secondary" data-action="retry">${retryLabel}</button>
          <button class="btn btn-secondary" data-action="another-week">Practise Another Week</button>
          <button class="btn btn-secondary" data-action="nav-home">Back to Dashboard</button>
        </div>
      </div>`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const bar = $('#ringBar'); if (bar) bar.style.strokeDashoffset = offset;
    }));
  }

  function retryQuiz() {
    if (!lastResult) return;
    const s = lastResult.session;
    startQuiz({ ids: s.baseIds, label: s.label, scope: s.scope, weeks: s.weeks });
  }

  /* ------------------------------------------------------------------
     12. ANSWER REVIEW
     ------------------------------------------------------------------ */
  let reviewFilter = 'all';

  function reviewStatus(s, id) {
    const a = s.answers[id];
    if (a === undefined) return 'unattempted';
    return a === QMAP[id].answer ? 'correct' : 'incorrect';
  }

  function renderReview() {
    if (!lastResult) { showView('home'); return; }
    const s = lastResult.session;
    const counts = { all: s.ids.length, correct: 0, incorrect: 0, unattempted: 0 };
    s.ids.forEach((id) => { counts[reviewStatus(s, id)]++; });
    const filters = [['all', 'All'], ['correct', 'Correct'], ['incorrect', 'Incorrect'], ['unattempted', 'Not attempted']];
    const list = s.ids.filter((id) => reviewFilter === 'all' || reviewStatus(s, id) === reviewFilter);

    const cards = list.map((id) => {
      const q = QMAP[id], st = reviewStatus(s, id), a = s.answers[id];
      const badge = st === 'correct' ? '<span class="chip ok">✓ Correct</span>' : st === 'incorrect' ? '<span class="chip bad">✗ Incorrect</span>' : '<span class="chip warn">Not attempted</span>';
      const opts = s.optionOrders[id].map((o, i) => {
        const isAns = o === q.answer, isYours = a === o;
        const tags = [isYours ? `<span class="tag">${isAns ? 'Your answer ✓' : 'Your answer ✗'}</span>` : '', isAns && !isYours ? '<span class="tag">Accepted answer</span>' : ''].join(' ');
        return `<li class="${isAns ? 'is-answer' : ''} ${isYours ? 'is-yours' : ''} ${isYours && !isAns ? 'is-wrong' : ''}"><span>${LETTERS[i]}. ${esc(o)}</span>${tags}</li>`;
      }).join('');
      const bm = store.bookmarks.includes(id);
      return `<article class="card rv-card ${st}">
        <div class="rv-head"><span><span class="chip">Week ${q.week}</span> <span class="chip">Q${q.questionNumber}</span> ${badge}</span>
          <button class="bm-btn" data-action="review-bookmark" data-id="${id}" aria-pressed="${bm}">${ICON.star} ${bm ? 'Bookmarked' : 'Bookmark'}</button></div>
        <div class="rv-q">${esc(q.question)}</div>
        <ul class="rv-opts">${opts}</ul>
        <p class="rv-summary"><b>Your answer:</b> ${a === undefined ? 'Not attempted' : esc(a)}<br><b>Accepted answer:</b> ${esc(q.answer)}</p>
      </article>`;
    }).join('');

    $('#reviewRoot').innerHTML = `
      <div class="review-top">
        <div><h1 class="page-title">Answer review</h1><p class="muted">${esc(s.label)}</p></div>
        <div class="row-gap">
          <button class="btn btn-secondary" data-action="back-results">← Back to results</button>
          <button class="btn btn-secondary" data-action="nav-home">Dashboard</button>
        </div>
      </div>
      <div class="filters" role="group" aria-label="Filter review">
        ${filters.map(([k, label]) => `<button class="filter-btn" data-action="review-filter" data-f="${k}" aria-pressed="${reviewFilter === k}">${label} (${counts[k]})</button>`).join('')}
      </div>
      <div class="review-list">${cards || '<div class="empty card">No questions in this category.</div>'}</div>`;
  }

  /* ------------------------------------------------------------------
     13. RESET
     ------------------------------------------------------------------ */
  async function resetProgress() {
    const ok = await confirmDialog({
      title: 'Reset all progress?',
      message: 'This permanently deletes your attempts, best scores, bookmarks, Mistake Bank and any saved quiz from this browser. Your theme and settings are kept.',
      confirmText: 'Reset progress', cancelText: 'Keep my progress', danger: true
    });
    if (!ok) return;
    store.attempts = []; store.attempted = {}; store.bookmarks = []; store.mistakes = []; store.session = null;
    session = null; lastResult = null;
    saveStore();
    toast('Progress reset.');
    showView('home');
  }

  /* ------------------------------------------------------------------
     14. EVENTS
     ------------------------------------------------------------------ */
  const actions = {
    'nav-home': () => showView('home'),
    'nav-practice': () => showView('practice'),
    'toggle-theme': switchTheme,
    'toggle-menu': (el) => {
      const open = $('#nav').classList.toggle('open');
      el.setAttribute('aria-expanded', String(open));
    },
    'edit-course': () => {
      const v = window.prompt('Course title:', store.settings.course);
      if (v !== null && v.trim()) { store.settings.course = v.trim().slice(0, 80); saveStore(); $('#courseTitle').textContent = store.settings.course; }
      $('#nav').classList.remove('open');
    },
    'hero-start': () => {
      if (currentView !== 'home') showView('home');
      const h = $('#weeksHeading'); h.scrollIntoView({ behavior: 'smooth', block: 'start' }); h.focus({ preventScroll: true });
    },
    'resume': resumeQuiz,
    'start-week': (el) => {
      const w = Number(el.dataset.week);
      if (!BY_WEEK[w]) { toast('That week is not available.'); return; }
      startQuiz({ ids: BY_WEEK[w].map(qid), scope: 'week', weeks: [w], label: `Week ${w} · Assignment ${ASSIGNMENT_OF[w]}` });
    },
    'start-all': () => startQuiz({ ids: QUESTIONS.map(qid), scope: 'all', weeks: WEEKS.slice(), label: 'All weeks (Week 0 – Week 12)' }),
    'sel-all': () => { customWeeks = new Set(WEEKS); renderPractice(); },
    'sel-none': () => { customWeeks = new Set(); renderPractice(); },
    'start-custom': startCustom,
    'start-bookmarks': () => startQuiz({ ids: store.bookmarks.slice(), scope: 'bookmarks', weeks: [], label: 'Bookmarked questions' }),
    'start-mistakes': () => startQuiz({ ids: store.mistakes.slice(), scope: 'mistakes', weeks: [], label: 'Mistake Bank' }),
    'clear-bookmarks': async () => {
      if (!store.bookmarks.length) { toast('No bookmarks to clear.'); return; }
      if (await confirmDialog({ title: 'Clear all bookmarks?', message: 'This removes every bookmarked question.', confirmText: 'Clear bookmarks', danger: true })) {
        store.bookmarks = []; saveStore(); renderPractice();
      }
    },
    'clear-mistakes': async () => {
      if (!store.mistakes.length) { toast('The Mistake Bank is already empty.'); return; }
      if (await confirmDialog({ title: 'Empty the Mistake Bank?', message: 'Questions will be added again if you get them wrong.', confirmText: 'Empty it', danger: true })) {
        store.mistakes = []; saveStore(); renderPractice();
      }
    },
    'practise-search': () => {
      const list = searchMatches();
      if (!list.length) { toast('No questions match your search.'); return; }
      startQuiz({ ids: list.map(qid), scope: 'search', weeks: [], label: `Search results (${plural(list.length, 'question')})` });
    },
    'search-bookmark': (el) => { toggleBookmark(el.dataset.id); renderSearch(); renderPractice_summaries(); },
    // quiz
    'prev': () => gotoQuestion(session.idx - 1),
    'next': () => gotoQuestion(session.idx + 1),
    'goto': (el) => gotoQuestion(Number(el.dataset.i)),
    'check': checkAnswer,
    'clear-selection': clearSelection,
    'mark-review': toggleReview,
    'bookmark': () => { const on = toggleBookmark(activeId()); toast(on ? 'Bookmarked.' : 'Bookmark removed.'); renderQuiz(); },
    'submit': requestSubmit,
    'exit-quiz': () => { persistSession(); toast('Progress saved. Use “Continue Where You Left Off” to resume.'); showView('home'); },
    // results & review
    'open-review': () => { reviewFilter = 'all'; renderReview(); showView('review'); },
    'back-results': () => { renderResults(); showView('results'); },
    'retry': retryQuiz,
    'another-week': () => { showView('home'); const h = $('#weeksHeading'); h.scrollIntoView({ block: 'start' }); h.focus({ preventScroll: true }); },
    'review-filter': (el) => { reviewFilter = el.dataset.f; renderReview(); },
    'review-bookmark': (el) => { toggleBookmark(el.dataset.id); renderReview(); },
    'reset': resetProgress
  };

  // Update bookmark/mistake summaries without re-rendering the search list
  function renderPractice_summaries() {
    $('#bmSummary').textContent = store.bookmarks.length
      ? `${plural(store.bookmarks.length, 'question')} bookmarked.` : 'No bookmarks yet. Use the Bookmark button while practising or in the search results below.';
  }

  function init() {
    applyTheme(store.settings.theme || 'dark');

    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-action]');
      if (!el || el.disabled) return;
      const fn = actions[el.dataset.action];
      if (fn) { try { fn(el); } catch (err) { console.error(err); toast('Something went wrong. Please try again.'); } }
    });

    document.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'opt' && t.closest('#quizRoot')) selectAnswer(Number(t.value));
      else if (t.closest('#settings')) onSettingsChange();
      else if (t.dataset && t.dataset.wk !== undefined) {
        const w = Number(t.dataset.wk);
        if (t.checked) customWeeks.add(w); else customWeeks.delete(w);
        updateCustomSummary();
      } else if (t.id === 'searchScope' || t.id === 'searchWeek') renderSearch();
    });
    $('#settings').addEventListener('input', (e) => { if (e.target.name === 'minutes') onSettingsChange(); });
    $('#searchInput').addEventListener('input', renderSearch);

    // Keyboard: Escape closes the mobile menu
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); } });

    // Save in-progress quiz when the tab is hidden or closed
    document.addEventListener('visibilitychange', () => { if (document.hidden && session && !session.submitted) persistSession(); });
    window.addEventListener('pagehide', () => { if (session && !session.submitted) persistSession(); });

    // Fix the screen-reader-only label class used in the timer
    const style = document.createElement('style');
    style.textContent = '.sr-only-label{margin-left:.15rem}';
    document.head.appendChild(style);

    showView('home');
  }

  init();
})();
