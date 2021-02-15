const warriorServices = {
  getFuryWarriorArmor(db) {
    const gear = [];
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
      .where('item_name', 'ILIKE', 'Nathrian Crusaders Bastard Sword')

    const weapon2 =
      db
      .from('wow_gear')
      .select('*')
      .where('item_name', 'ILIKE', 'Nathrian Crusaders Bastard Sword')

    gear.push(helm)
    gear.push(neck)
    gear.push(shoulder)
    gear.push(cloak)
    gear.push(chest)
    gear.push(wrists)
    gear.push(gloves)
    gear.push(belt)
    gear.push(legs)
    gear.push(boots)
    gear.push(ring1)
    gear.push(ring2)
    gear.push(weapon1)
    gear.push(weapon2)
    
    return gear;
  }
}

module.exports = warriorServices