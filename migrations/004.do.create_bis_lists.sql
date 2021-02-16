CREATE TABLE fury_warrior(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE arms_warrior(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE protection_warrior(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE marksman_hunter(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE beast_mastery_hunter(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE survival_hunter(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE holy_priest(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE discipline_priest(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);

CREATE TABLE shadow_priest(
    item_name TEXT REFERENCES wow_gear(item_name),
    item_category TEXT REFERENCES wow_gear(item_category),
    item_type TEXT REFERENCES wow_gear(item_type),
    item_class TEXT REFERENCES wow_gear(item_class),
    item_location TEXT REFERENCES wow_gear(item_location),
    item_source TEXT REFERENCES wow_gear(item_source),
    main_stat TEXT REFERENCES wow_gear(main_stat),
    primary_stat TEXT REFERENCES wow_gear(primary_stat),
    secondary_stat TEXT REFERENCES wow_gear(secondary_stat),
    item_id TEXT REFERENCES wow_gear(item_id)
);