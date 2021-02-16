const warriorServices = {
  getFuryWarriorHelm(db) {
    // const gear = {};
    const helm =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Diadem of Imperious Desire')
    const neck =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Charm of Eternal Winter')

    const shoulder =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Epaulettes of Overwhelming Force')

    const cloak =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Crest of the Legionnaire General')

    const chest =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Breastplate of Cautious Calculation')

    const wrists =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Hellhound Cuffs')

    const gloves =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Colossal Plate Gauntlets')

    const belt =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Binding of Warped Desires')

    const legs =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Endlessly Gluttonous Greaves')

    const boots =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Errant Crusaders Greaves')

    const ring1 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Most Regal Signet of Sire Denathrius')

    const ring2 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Ritualists Treasured Ring')

    const weapon1 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Zenith Anima Spherule')

    const weapon2 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Zenith Anima Spherule')

    gear.helm = helm
    gear.neck = neck
    gear.shoulder = shoulder
    gear.cloak = cloak
    gear.chest = chest
    gear.wrists = wrists
    gear.gloves = gloves
    gear.belt = belt
    gear.legs = legs
    gear.boots = boots
    gear.ring1 = ring1
    gear.ring2 = ring2
    gear.weapon1 = weapon1
    gear.weapon2 = weapon2

    
    return helm, neck, shoulder, cloak, chest, wrists, gloves, belt, legs, boots, ring1, ring2, weapon1, weapon2;
  },
  getFuryWarriorNeck(db) {
    // const gear = {};
    const helm =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Diadem of Imperious Desire')
    const neck =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Charm of Eternal Winter')

    const shoulder =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Epaulettes of Overwhelming Force')

    const cloak =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Crest of the Legionnaire General')

    const chest =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Breastplate of Cautious Calculation')

    const wrists =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Hellhound Cuffs')

    const gloves =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Colossal Plate Gauntlets')

    const belt =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Binding of Warped Desires')

    const legs =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Endlessly Gluttonous Greaves')

    const boots =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Errant Crusaders Greaves')

    const ring1 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Most Regal Signet of Sire Denathrius')

    const ring2 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Ritualists Treasured Ring')

    const weapon1 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Zenith Anima Spherule')

    const weapon2 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Zenith Anima Spherule')

    // gear.helm = helm
    // gear.neck = neck
    // gear.shoulder = shoulder
    // gear.cloak = cloak
    // gear.chest = chest
    // gear.wrists = wrists
    // gear.gloves = gloves
    // gear.belt = belt
    // gear.legs = legs
    // gear.boots = boots
    // gear.ring1 = ring1
    // gear.ring2 = ring2
    // gear.weapon1 = weapon1
    // gear.weapon2 = weapon2

    // console.log(gear)
    return neck;
  }



}

module.exports = warriorServices