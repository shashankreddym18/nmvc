// Numerology reference data for Driver Numbers 1-9
const DRIVER_DATA = {
  1: {
    planet: "Sun",
    strengths: [
      "Natural-born leader with strong independence and confidence",
      "Original thinker who likes to do things their own way",
      "Ambitious, self-motivated and goal driven",
      "Creative problem solver who isn't afraid to take the first step"
    ],
    weaknesses: [
      "Can become egotistic or overly self-centered",
      "Stubborn and finds it hard to accept others' opinions",
      "Impatient and may dominate conversations or decisions",
      "Can feel lonely at the top due to a strong independent streak"
    ],
    parenting: "As a parent, you lead by example and encourage your children to be independent and confident. You set high standards and want your kids to think for themselves, though you may need to be mindful of being too authoritative or controlling.",
    luckyColors: ["Gold", "Orange", "Yellow"],
    badColors: ["Black"]
  },
  2: {
    planet: "Moon",
    strengths: [
      "Highly intuitive, sensitive and emotionally aware",
      "Diplomatic and a natural peacemaker in relationships",
      "Caring, cooperative and great at teamwork",
      "Imaginative with a strong inner emotional world"
    ],
    weaknesses: [
      "Tends to be overly emotional or moody",
      "Indecisive and easily influenced by others' opinions",
      "Can be overly dependent on validation from people close to them",
      "Prone to overthinking and worry"
    ],
    parenting: "As a parent, you are nurturing, emotionally tuned-in and create a warm, caring home environment. You are highly attentive to your children's feelings, though you may need to avoid being overprotective.",
    luckyColors: ["White", "Cream", "Light Green"],
    badColors: ["Red", "Maroon"]
  },
  3: {
    planet: "Jupiter",
    strengths: [
      "Optimistic, expressive and naturally creative",
      "Sociable and enjoys connecting with a wide circle of people",
      "Knowledgeable, philosophical and a great communicator",
      "Inspires others with enthusiasm and big-picture thinking"
    ],
    weaknesses: [
      "Can be overconfident or take on too much at once",
      "Tendency to scatter focus across multiple things",
      "May come across as preachy or opinionated",
      "Sometimes impractical when it comes to execution"
    ],
    parenting: "As a parent, you encourage learning, creativity and self-expression in your children. You are fun-loving and open-minded, though you may need to keep expectations realistic and grounded.",
    luckyColors: ["Yellow", "Purple", "Violet"],
    badColors: ["Black"]
  },
  4: {
    planet: "Rahu",
    strengths: [
      "Practical, disciplined and highly organized",
      "Hardworking, dependable and methodical in approach",
      "Strong sense of structure, routine and planning",
      "Loyal and trustworthy once committed to a goal"
    ],
    weaknesses: [
      "Can be rigid and resistant to change",
      "Stubborn once a decision is made",
      "Prone to facing delays and obstacles despite hard work",
      "May come across as overly serious or strict"
    ],
    parenting: "As a parent, you provide structure, stability and routine for your children, teaching them responsibility and discipline from an early age. Be mindful of not being overly strict.",
    luckyColors: ["Grey", "Blue", "Electric Shades"],
    badColors: ["Red"]
  },
  5: {
    planet: "Mercury",
    strengths: [
      "Highly adaptable and quick to embrace change",
      "Excellent communicator, witty and quick-thinking",
      "Loves freedom, travel and new experiences",
      "Versatile with the ability to multitask effectively"
    ],
    weaknesses: [
      "Can be restless and easily bored",
      "Impulsive decision making at times",
      "Inconsistent follow-through on long-term plans",
      "May overindulge in pleasures or distractions"
    ],
    parenting: "As a parent, you are fun, flexible and encourage your children's independence and curiosity. You may need to work on maintaining consistent routines and discipline.",
    luckyColors: ["Light Green", "White", "Grey"],
    badColors: []
  },
  6: {
    planet: "Venus",
    strengths: [
      "Loving, responsible and deeply family-oriented",
      "Harmonious nature with a strong artistic and aesthetic sense",
      "Reliable and others naturally turn to you for support",
      "Generous and enjoys creating comfort and beauty around them"
    ],
    weaknesses: [
      "Can become overly attached or possessive",
      "Indecisive when it comes to personal choices",
      "Prone to worry, especially about loved ones",
      "May neglect own needs while caring for others"
    ],
    parenting: "As a parent, you are deeply devoted, protective and create a loving, comfortable home for your children. Be careful not to become overprotective or controlling.",
    luckyColors: ["Blue", "Pink", "White"],
    badColors: []
  },
  7: {
    planet: "Ketu",
    strengths: [
      "Analytical, intuitive and a deep independent thinker",
      "Drawn to spirituality, research and self-discovery",
      "Comfortable working alone and trusting their own judgment",
      "Wise, observant and detail oriented"
    ],
    weaknesses: [
      "Can be aloof, secretive or hard to read",
      "Skeptical of others' intentions",
      "Prone to isolation and avoiding social situations",
      "May overanalyze instead of taking action"
    ],
    parenting: "As a parent, you encourage independent thinking, education and self-reliance in your children. Be mindful of expressing emotional warmth, as you can come across as distant.",
    luckyColors: ["Red", "Green", "White", "Yellow"],
    badColors: ["Black"]
  },
  8: {
    planet: "Saturn",
    strengths: [
      "Disciplined, ambitious and extremely hardworking",
      "Strong sense of justice, fairness and responsibility",
      "Financially savvy with good long-term planning skills",
      "Resilient and able to handle pressure and setbacks"
    ],
    weaknesses: [
      "Can be pessimistic or overly serious",
      "Tendency to become a workaholic at the cost of health",
      "Rigid thinking and resistance to others' ideas",
      "May be perceived as harsh or ruthless under pressure"
    ],
    parenting: "As a parent, you set high expectations and teach discipline, responsibility and the value of hard work. Try to balance discipline with warmth so you don't come across as distant.",
    luckyColors: ["Dark Blue", "Black", "Purple"],
    badColors: ["Red"]
  },
  9: {
    planet: "Mars",
    strengths: [
      "Bold, energetic and a natural commander",
      "Honest, outspoken and works hard to achieve goals",
      "Courageous with great resilience and ability to bounce back",
      "Deeply compassionate and a true humanitarian at heart"
    ],
    weaknesses: [
      "Quick to anger and can hold grudges against those who wrong them",
      "Can be harsh with words in the heat of the moment",
      "Tendency toward a superiority complex",
      "Experiences strong mood swings"
    ],
    parenting: "As a parent, you are deeply involved in your child's life, encouraging extracurricular growth while being protective and compassionate. Be careful not to become over-protective.",
    luckyColors: ["Red", "Green", "White", "Yellow"],
    badColors: ["Black"]
  }
};

// How the Conductor Number's planet influences/modifies the Driver Number's base personality
const CONDUCTOR_DATA = {
  1: {
    planet: "Sun",
    influence: "adds a strong dose of leadership, self-belief and independence. You are pushed to take charge of situations and trust your own judgment rather than relying on others."
  },
  2: {
    planet: "Moon",
    influence: "adds emotional sensitivity, intuition and a need for harmony in relationships. It softens your approach and makes you more attentive to how others feel."
  },
  3: {
    planet: "Jupiter",
    influence: "adds optimism, creativity and a love for learning and self-expression. It broadens your outlook and encourages you to explore new ideas and connect with people."
  },
  4: {
    planet: "Rahu",
    influence: "adds unconventional thinking and a desire to do things differently. It can also bring restlessness, sudden changes and the occasional obstacle that tests your patience."
  },
  5: {
    planet: "Mercury",
    influence: "adds adaptability, quick thinking and excellent communication skills. It makes you more versatile but can also bring restlessness and a need for variety."
  },
  6: {
    planet: "Venus",
    influence: "adds warmth, responsibility and a strong pull towards family, relationships and aesthetics. It makes you more caring but also more attached to people and comforts."
  },
  7: {
    planet: "Ketu",
    influence: "adds depth, introspection and an interest in research, spirituality or the unknown. It can make you more private and selective about who you let in."
  },
  8: {
    planet: "Saturn",
    influence: "adds discipline, ambition and a strong work ethic, along with lessons learned through patience and delayed rewards. It pushes you to be more practical and goal-oriented."
  },
  9: {
    planet: "Mars",
    influence: "adds energy, courage and a humanitarian drive. It makes you more action-oriented and willing to fight for causes and people you care about, but can add a short temper."
  }
};

// Meaning of a number appearing multiple times in the birth chart
const REPEATING_NUMBER_DATA = {
  1: "A strong presence of Number 1 highlights leadership and self-reliance, but you may find it hard to express your innermost feelings and prefer to keep things to yourself.",
  2: "A strong presence of Number 2 makes you highly sensitive and intuitive. You can sense things before they happen, though you may not always trust or act on that intuition.",
  3: "A strong presence of Number 3 gives you excellent creative and imaginative abilities. You are great at visualizing ideas, though you may start many things without finishing all of them.",
  4: "A strong presence of Number 4 makes you disciplined, punctual and organized. You like structure and routine, and you enjoy hands-on or skill-based work.",
  5: "A strong presence of Number 5 brings adaptability, communication skills and a love of freedom. You think on your feet and adjust easily to new situations.",
  6: "A strong presence of Number 6 makes you deeply responsible and protective towards family. You are the person others turn to for advice and emotional support.",
  7: "A strong presence of Number 7 brings analytical depth and an interest in research or spirituality. You prefer to verify things yourself rather than take them at face value.",
  8: "A strong presence of Number 8 makes you cautious and smart with money. You manage finances well and keep things organized, though success may come after some delay and hard work.",
  9: "A strong presence of Number 9 brings energy, ambition and a humanitarian streak. You have strong willpower and a constant desire to grow and improve yourself."
};

// Meaning + remedy for a number missing entirely from the birth chart
const MISSING_NUMBER_DATA = {
  1: {
    meaning: "The absence of Number 1 may mean you sometimes lack self-confidence or hesitate to take the lead, even when you're capable.",
    remedy: "Practice making small independent decisions daily, spend time in sunlight each morning, and try wearing or surrounding yourself with shades of orange or gold."
  },
  2: {
    meaning: "The absence of Number 2 may mean you find it difficult to fully trust your intuition or express emotional sensitivity.",
    remedy: "Keep a journal of your gut feelings and check how often they turn out true, stay close to water (a glass of water nearby, a walk near a lake), and favor white or light colors."
  },
  3: {
    meaning: "The absence of Number 3 may mean creative self-expression doesn't come naturally and you may avoid putting your ideas out into the world.",
    remedy: "Spend a little time each week on a creative hobby (writing, drawing, music), wear touches of yellow or purple, and engage more in conversation and social activities."
  },
  4: {
    meaning: "The absence of Number 4 may mean you find it hard to stick to routines, structure or long-term planning.",
    remedy: "Use planners or checklists to build structure into your day, keep your workspace organized and tidy, and incorporate shades of grey or blue into your surroundings."
  },
  5: {
    meaning: "Number 5 is considered a master number, and its absence is associated with frequent ups and downs and a sense that something is missing, even when things are going well.",
    remedy: "Carry or wear something green, spend time barefoot on grass in the early morning, include green leafy vegetables in your diet, and keep a clear quartz crystal with you."
  },
  6: {
    meaning: "The absence of Number 6 may mean you find responsibility, family duties or commitment a little overwhelming at times.",
    remedy: "Make a conscious effort to spend quality time with family, decorate your home with fresh flowers, and favor blue, pink or white in your clothing and surroundings."
  },
  7: {
    meaning: "The absence of Number 7 may mean you have less natural interest in spirituality, research or deep introspection, and may rush through tasks without going into depth.",
    remedy: "Set aside quiet time for reflection or meditation, wear a metal watch on your wrist, and spend time near water or in green, open spaces."
  },
  8: {
    meaning: "The absence of Number 8 may mean financial growth and recognition can take longer to arrive, requiring extra patience and consistency.",
    remedy: "Keep your finances organized with clear records, avoid impulsive spending, and favor dark blue, black or purple in your surroundings."
  },
  9: {
    meaning: "The absence of Number 9 may mean you may need to consciously cultivate compassion, energy and a sense of purpose beyond yourself.",
    remedy: "Volunteer or help others when you can, take up a physical activity to channel your energy, and favor red, green, white or yellow in your surroundings."
  }
};

// Personal Year themes (1-9 cycle)
const PERSONAL_YEAR_DATA = {
  1: "A year of new beginnings. This is the time to start fresh projects, set new goals and take the initiative. Seeds planted this year will grow over the next cycle, so be proactive rather than waiting for things to happen.",
  2: "A year of patience, partnership and cooperation. Focus on relationships, teamwork and emotional balance. Big decisions may need to wait — this is a year to build foundations quietly and diplomatically.",
  3: "A year of creativity, self-expression and socializing. Your communication and creative energy are at a high. Good time for learning, networking and enjoying life, though focus can be scattered if you take on too much.",
  4: "A year of hard work, structure and building foundations. Focus on discipline, organization and practical matters like health, finances and routines. Progress may feel slow but it's laying groundwork for future success.",
  5: "A year of change, freedom and new experiences. Expect unexpected shifts, travel opportunities and a need for flexibility. Avoid getting too attached to rigid plans — go with the flow.",
  6: "A year of responsibility, family and relationships. Focus shifts to home, family matters and commitments. It can also bring opportunities related to property, marriage or caregiving responsibilities.",
  7: "A year of introspection, rest and inner growth. A good year for spiritual pursuits, study, research and self-reflection. Avoid rushing into major new ventures — use this time to recharge and plan.",
  8: "A year of achievement, recognition and financial focus. Hard work from previous years can pay off now. Good time for business growth, career advancement and major financial decisions, but stay balanced to avoid burnout.",
  9: "A year of completion and letting go. This closes a 9-year cycle, making it a good time to finish pending projects, release what no longer serves you, and prepare for a new cycle beginning next year. Avoid starting major new ventures."
};

// Kua Number based lucky directions (Feng Shui / Vastu).
// Kua 1,3,4,9 = East Group | Kua 2,6,7,8 = West Group (Kua 5 is converted to 2 or 8 during calculation)
const KUA_DATA = {
  1: {
    group: "East",
    directions: {
      success: "Southeast",
      health: "East",
      relationships: "South",
      stability: "North"
    }
  },
  2: {
    group: "West",
    directions: {
      success: "Northeast",
      health: "West",
      relationships: "Northwest",
      stability: "Southwest"
    }
  },
  3: {
    group: "East",
    directions: {
      success: "South",
      health: "North",
      relationships: "Southeast",
      stability: "East"
    }
  },
  4: {
    group: "East",
    directions: {
      success: "North",
      health: "South",
      relationships: "East",
      stability: "Southeast"
    }
  },
  6: {
    group: "West",
    directions: {
      success: "West",
      health: "Northeast",
      relationships: "Southwest",
      stability: "Northwest"
    }
  },
  7: {
    group: "West",
    directions: {
      success: "Northwest",
      health: "Southwest",
      relationships: "Northeast",
      stability: "West"
    }
  },
  8: {
    group: "West",
    directions: {
      success: "Southwest",
      health: "Northwest",
      relationships: "West",
      stability: "Northeast"
    }
  },
  9: {
    group: "East",
    directions: {
      success: "East",
      health: "Southeast",
      relationships: "North",
      stability: "South"
    }
  }
};
