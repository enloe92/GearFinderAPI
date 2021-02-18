function makeItemsArray() {
  return [
   
  {item_name: 'Diadem of Imperious Desire', item_category: 'Armor', item_type: 'Plate', item_class: 'Head', item_location: 'Castle Nathria', item_source: 'Sire Denathrius', main_stat: 'Flex', primary_stat: 'Mastery', secondary_stat: 'Haste', item_id: '182997'},
  {item_name: 'Charm of Eternal Winter', item_category:'Armor', item_type:'All', item_class:'Neck', item_location:'Castle Nathria', item_source:'Huntsman Altimor', main_stat:'Flex', primary_stat:'Mastery', secondary_stat:'Haste', item_id:'183040'},
  {item_name:'Epaulettes of Overwhelming Force', item_category: 'Armor', item_type:'Plate', item_class:'Shoulder', item_location:'Castle Nathria', item_source:'Hungering Destroyer', main_stat:'Flex', primary_stat:'Critical Strike', secondary_stat:'Haste', item_id:'182994'},
  {item_name: 'Crest of the Legionnaire General', item_category:'Armor', item_type:'All', item_class:'Back', item_location:'Castle Nathria', item_source:'Stone Legion Generals', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Versatility', item_id:'183032'},
  {item_name: 'Breastplate of Cautious Calculation', item_category:'Armor', item_type:'Plate', item_class:'Chest', item_location:'Castle Nathria', item_source:'Artificer Xymox', main_stat:'Flex', primary_stat:'Mastery', secondary_stat:'Critical Strike', item_id:'182987'},
  {item_name: 'Hellhound Cuffs', item_category:'Armor', item_type:'Plate', item_class:'Wrist', item_location:'Castle Nathria', item_source:'Huntsman Altimor', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Critical Strike', item_id:'183018'},
  {item_name: 'Colossal Plate Gauntlets', item_category:'Armor', item_type:'Plate', item_class:'Hands', item_location:'Castle Nathria', item_source:'Sludgefist', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Versatility', item_id:'182984'},
  {item_name: 'Binding of Warped Desires', item_category:'Armor', item_type:'Plate', item_class:'Waist', item_location:'Castle Nathria', item_source:'Lady Inerva Darkvein', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Critical Strike', item_id:'183015'},
  {item_name: 'Endlessly Gluttonous Greaves', item_category:'Armor', item_type:'Plate', item_class:'Legs', item_location:'Castle Nathria', item_source:'Hungering Destroyer', main_stat:'Flex', primary_stat:'Mastery', secondary_stat:'Critical Strike', item_id:'182992'},
  {item_name: 'Errant Crusaders Greaves', item_category:'Armor', item_type:'Plate', item_class:'Feet', item_location:'Castle Nathria', item_source:'Shriekwing', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Mastery', item_id:'183027'},
  {item_name: 'Most Regal Signet of Sire Denathrius', item_category:'Armor', item_type:'All', item_class:'Ring', item_location:'Castle Nathria', item_source:'Sire Denathrius', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Mastery', item_id:'183036'},
  {item_name: 'Ritualists Treasured Ring', item_category:'Armor', item_type:'All', item_class:'Ring', item_location:'Castle Nathria', item_source:'Lady Inerva Darkvein', main_stat:'Flex', primary_stat:'Haste', secondary_stat:'Critical Strike', item_id:'183037'},
  {item_name:'Zenith Anima Spherule', item_category:'Weapon', item_type:'All', item_class:'All', item_location:'Castle Nathria', item_source:'Sire Denathrius', main_stat:'Flex', primary_stat:'Flex', secondary_stat:'Flex', item_id:'183899'},
  {item_name: 'Zenith Anima Spherule', item_category:'Weapon', item_type:'All', item_class:'All', item_location:'Castle Nathria', item_source:'Sire Denathrius', main_stat:'Flex', primary_stat:'Flex', secondary_stat:'Flex', item_id:'183899'}

  ]
}

function makeExpecteditem(item) {
  return {
    item_name: item.item_name,
    item_type: item.item_type,
    item_class: item.item_class,
    item_location: item.item_location,
    item_source: item.item_source,
    main_stat: item.main_stat,
    primary_stat: item.primary_stat,
    secondary_stat: item.secondary_stat,
    item_id: item.item_id,
  }
}


function makeItemsFixtures() {
  const testItems = makeItemsArray()
  return { testItems }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        wow_gear,
        fury_warrior,
        protection_warrior,
        arms_warrior,
        survival_hunter,
        marksman_hunter,
        beast_mastery_hunter,
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE wow_gear_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('wow_gear_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE fury_warrior_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('fury_warrior_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE protection_warrior_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('protection_warrior_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE arms_warrior_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('arms_warrior_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE survival_hunter_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('survival_hunter_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE marksman_hunter_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('marksman_hunter_id_seq', 0)`),
        trx.raw(`ALTER SEQUENCE beast_mastery_hunter_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('beast_mastery_hunter_id_seq', 0)`),
      ])
    )
  )
}

function seedItemsTables(db, items) {
  // use a transaction to group the queries and auto rollback on any failure
  return db.transaction(async trx => {
    await trx.into('wow_gear').insert(items)
    await trx.into('fury_warrior').insert(items)
    await trx.into('protection_warrior').insert(items)
    await trx.into('arms_warrior').insert(items)
    await trx.into('survival_hunter').insert(items)
    await trx.into('marksman_hunter').insert(items)
    await trx.into('beast_mastery_hunter').insert(items)
    // update the auto sequence to match the forced id values
  })
}


module.exports = {

  makeItemsArray,
  makeExpecteditem,
  makeItemsFixtures,
  cleanTables,
  seedItemsTables,
  
}
