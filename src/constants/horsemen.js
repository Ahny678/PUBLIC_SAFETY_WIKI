import HMImg from "../assets/images/HORSEMEN/ALL/cat.jpg";
// CONTROL ONE
const control1 = import.meta.glob(
  "../assets/images/HORSEMEN/Makima/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const control1Arr = Object.values(control1).map((m) => m.default);
console.log("Imported images:", control1);

// CONTROL TWO
const control2 = import.meta.glob(
  "../assets/images/HORSEMEN/Nayuta/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const control2Arr = Object.values(control2).map((m) => m.default);

//YORU
const war = import.meta.glob(
  "../assets/images/HORSEMEN/YORU/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const warArr = Object.values(war).map((m) => m.default);

//FAMI
const famine = import.meta.glob(
  "../assets/images/HORSEMEN/FAMI/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const famineArr = Object.values(famine).map((m) => m.default);

//LILD
const death = import.meta.glob(
  "../assets/images/HORSEMEN/LILD/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const deathArr = Object.values(death).map((m) => m.default);

// --- Control (Makima) ---
export const horsemanControl1 = {
  image: control1Arr,
  title: "The Control Devil(I)",
  name: "Makima",
  modeOfAttack: `Makima manipulates others through contracts, authority, and sheer fear. Her primary ability is domination—forcing others to obey her will and even sacrificing them to fuel her attacks.`,
  appearance: `A composed young woman with auburn hair tied in a braid, golden eyes resembling spirals, and an ever-present calm smile. Her outward form is deliberately disarming and human-like.`,
  temperament: `Calculated, manipulative, and quietly terrifying. Makima is outwardly kind and gentle but harbors a cold, ruthless drive toward her goals.`,
  philosophy: `Makima views humanity as something to be controlled and perfected under her guidance. She desires a world without fear, pain, or chaos—but through absolute dominance.`,
  dangerLevel: `Extreme. Makima actively manipulates, uses, and discards humans with little regard. Her danger lies not only in violence but in her ability to strip away free will itself.`,
};

// // --- Control (Nayuta) ---
export const horsemanControl2 = {
  image: control2Arr,
  title: "The Control Devil(II)",
  name: "Nayuta",
  modeOfAttack: `Nayuta retains fragments of Makima’s abilities—chains that bind, domination of lesser beings, and command over animals. Her powers are less refined but still terrifyingly potent.`,
  appearance: `A young girl with short dark hair and spiral-patterned eyes, often dressed casually. Compared to Makima, she appears more childlike and approachable.`,
  temperament: `Innocent yet sharp, mischievous, and curious. While she can be selfish or blunt, she has been raised with care and shows more humanity than Makima.`,
  philosophy: `Unlike Makima, Nayuta lacks the grand ambitions of total domination. Her philosophy is still forming, guided by Denji and her experiences of actual family bonds.`,
  dangerLevel: `Moderate to High. Though not as ruthless as Makima, Nayuta’s potential is immense. If corrupted or unchecked, she could easily surpass her predecessor.`,
};

// --- War (Yoru) ---
export const horsemanWar = {
  image: warArr,
  title: "The War Devil",
  name: "Yoru",
  modeOfAttack: `Yoru transforms anything she claims as "hers" into deadly weapons—ranging from pencils and uniforms to entire body parts of allies. Her arsenal grows stronger with emotional connection and sacrifice.`,
  appearance: `A teenage girl with short dark hair, sharp eyes, and a school uniform. When manifesting, her demeanor becomes harsher, reflecting her devilish nature.`,
  temperament: `Prideful, bitter, and insecure. Yoru struggles with feelings of inferiority compared to her Horseman siblings and is desperate to regain her former power.`,
  philosophy: `War thrives on conflict and rivalry. She believes strength is proven through combat and destruction, seeking acknowledgment through dominance in battle.`,
  dangerLevel: `High. While not as universally manipulative as Control, Yoru’s abilities make her extremely dangerous in close proximity, especially to those she forms bonds with.`,
};

// --- Famine (Fami) ---
export const horsemanFamine = {
  image: famineArr,
  title: "The Famine Devil",
  name: "Fami",
  modeOfAttack: `Fami manipulates hunger and necessity, imposing conditions where humans and devils alike are deprived of sustenance or forced into desperate deals to survive.`,
  appearance: `A composed young woman with long dark hair, golden eyes, and a mysterious, refined aura. She dresses simply yet elegantly, radiating authority.`,
  temperament: `Calm, calculating, and manipulative in subtle ways. Fami often masks her intentions, preferring indirect methods to achieve her goals.`,
  philosophy: `She sees deprivation as the ultimate motivator—believing that only through hunger, lack, and struggle can beings be pushed to their true potential or desperation.`,
  dangerLevel: `Moderate to High. Fami is less overtly violent but her indirect manipulations can doom entire groups or nations. Her cruelty lies in slow suffering rather than immediate destruction.`,
};

// // --- Death (LilD) ---
export const horsemanDeath = {
  image: deathArr,
  title: "The Death Devil",
  name: "LilD",
  modeOfAttack: `Death requires no weapons—her very presence embodies mortality. She can end life instantly or corrode vitality slowly, making resistance meaningless.`,
  appearance: `A hauntingly beautiful figure shrouded in shadows, with pale skin, dark flowing hair, and eyes that reflect the void. Her form feels eternal and absolute.`,
  temperament: `Silent, indifferent, and detached. Death neither rages nor delights in killing—she simply exists as the inevitability all beings must face.`,
  philosophy: `Death is inevitable. She does not see herself as cruel, only as the natural balance to life. Unlike her siblings, she does not seek domination or conflict—her existence is its own end.`,
  dangerLevel: `Absolute. Death is the most dangerous Horseman, her mere manifestation representing the primal fear of all living beings. Unlike others, she does not need schemes or weapons—mortality itself is her weapon.`,
};

export const allHorsemen = [
  horsemanControl1,
  horsemanControl2,
  horsemanWar,
  horsemanFamine,
  horsemanDeath,
];

export const heroHM = {
  image: HMImg,
  title: "The Four Horsemen",
  desc: `The Four Horsemen are devils who embody humanity’s deepest, most inescapable fears. Their names are whispered with dread, for wherever they tread, ruin follows. Bound together yet forever at odds, they shape the fate of the world through violence, control, and inevitability. Their influence lingers like a shadow over all existence, a reminder that no one escapes the fears they represent.`,
};
