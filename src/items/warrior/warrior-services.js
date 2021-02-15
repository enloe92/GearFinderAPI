const warriorServices = {
  getFuryWarriorArmor(db){
    const gear = [];
    gear.push(
      db
        .from('wow_gear')
        .select('*')
        .where('item_name', 'ILIKE', 'Diadem of Imperious Desire')
    )
    return gear; 
  }
}

module.exports = warriorServices

