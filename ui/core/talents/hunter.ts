import { HunterMajorGlyph, HunterMinorGlyph, HunterPrimeGlyph, HunterTalents } from '../proto/hunter.js';
import { GlyphsConfig } from './glyphs_picker.js';
import { newTalentsConfig, TalentsConfig } from './talents_picker.js';
import HunterTalentJson from './trees/hunter.json';export const hunterTalentsConfig: TalentsConfig<HunterTalents> = newTalentsConfig(HunterTalentJson);

export const hunterGlyphsConfig: GlyphsConfig = {
	primeGlyphs: {
	},
	majorGlyphs: {
		[HunterMajorGlyph.GlyphOfCamouflage]: {
			name: "Glyph of Camouflage",
			description: "Your Camouflage ability now provides stealth even while moving, but your movement speed while Camouflage is active is reduced by $119450s3%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_displacement.jpg",
		},
		[HunterMajorGlyph.GlyphOfLiberation]: {
			name: "Glyph of Liberation",
			description: "When you Disengage, you are healed for $115927s1% of your total health.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/achievement_bg_returnxflags_def_wsg.jpg",
		},
		[HunterMajorGlyph.GlyphOfMending]: {
			name: "Glyph of Mending",
			description: "Your Mend Pet now heals every $s3 sec, and heals for an additional $s4% of your pet's health over its duration.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bandage_15.jpg",
		},
		[HunterMajorGlyph.GlyphOfDistractingShot]: {
			name: "Glyph of Distracting Shot",
			description: "Your Distracting Shot now distracts the target to attack your pet instead of you.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_blink.jpg",
		},
		[HunterMajorGlyph.GlyphOfEndlessWrath]: {
			name: "Glyph of Endless Wrath",
			description: "While Bestial Wrath is active, your pet cannot be killed, but can still be damaged.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_ferociousbite.jpg",
		},
		[HunterMajorGlyph.GlyphOfDeterrence]: {
			name: "Glyph of Deterrence",
			description: "Increases the damage reduction granted by Deterrence by $s1%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_whirlwind.jpg",
		},
		[HunterMajorGlyph.GlyphOfDisengage]: {
			name: "Glyph of Disengage",
			description: "Increases the distance you travel when you Disengage.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_feint.jpg",
		},
		[HunterMajorGlyph.GlyphOfFreezingTrap]: {
			name: "Glyph of Freezing Trap",
			description: "When your Freezing Trap breaks, the victim's movement speed is reduced by $61394s1% for $61394d.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg",
		},
		[HunterMajorGlyph.GlyphOfIceTrap]: {
			name: "Glyph of Ice Trap",
			description: "Increases the radius of the effect from your Ice Trap by $56847s1 yards.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/.jpg",
		},
		[HunterMajorGlyph.GlyphOfMisdirection]: {
			name: "Glyph of Misdirection",
			description: "When you use Misdirection on your pet, the cooldown on your Misdirection is reset.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_misdirection.jpg",
		},
		[HunterMajorGlyph.GlyphOfExplosiveTrap]: {
			name: "Glyph of Explosive Trap",
			description: "Your Explosive Trap no longer deals damage, instead knocking enemies back from the trap when it explodes.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_fire_selfdestruct.jpg",
		},
		[HunterMajorGlyph.GlyphOfAnimalBond]: {
			name: "Glyph of Animal Bond",
			description: "While your pet is active, all healing done to you and your pet is increased by $24529s1%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_demoralizingroar.jpg",
		},
		[HunterMajorGlyph.GlyphOfNoEscape]: {
			name: "Glyph of No Escape",
			description: "Increases the ranged critical strike chance of all of your attacks on targets affected by your Freezing Trap by $s1%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pointofnoescape.jpg",
		},
		[HunterMajorGlyph.GlyphOfPathfinding]: {
			name: "Glyph of Pathfinding",
			description: "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by $s1%, and increases your speed while mounted by $s2%. The mounted movement speed increase does not stack with other effects.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pathfinding2.jpg",
		},
		[HunterMajorGlyph.GlyphOfSnakeTrap]: {
			name: "Glyph of Snake Trap",
			description: "Snakes from your Snake Trap take $56849s1% reduced damage from area of effect attacks.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snaketrap.jpg",
		},
		[HunterMajorGlyph.GlyphOfAimedShot]: {
			name: "Glyph of Aimed Shot",
			description: "Your Aimed Shot can now be used while moving.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_spear_07.jpg",
		},
		[HunterMajorGlyph.GlyphOfMendPet]: {
			name: "Glyph of Mend Pet",
			description: "Gives your Mend Pet ability a $s1% chance of cleansing $24406s1 Curse, Disease, Magic or Poison effect from your pet each tick.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_mendpet.jpg",
		},
		[HunterMajorGlyph.GlyphOfSolace]: {
			name: "Glyph of Solace",
			description: "Your Freezing Trap and Scatter Shot also remove all damage over time effects from their targets.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostshock.jpg",
		},
		[HunterMajorGlyph.GlyphOfChimeraShot]: {
			name: "Glyph of Chimera Shot",
			description: "Increases the healing you receive from Chimera Shot by an additional $s1% of your maximum health.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_chimerashot2.jpg",
		},
		[HunterMajorGlyph.GlyphOfTranquilizingShot]: {
			name: "Glyph of Tranquilizing Shot",
			description: "Your Tranquilizing Shot no longer costs Focus, but has a ${$m1/1000} sec cooldown.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_drowsy.jpg",
		},
		[HunterMajorGlyph.GlyphOfMastersCall]: {
			name: "Glyph of Master's Call",
			description: "Increases the duration of your Master's Call by $/1000;S1 sec.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_masterscall.jpg",
		},
		[HunterMajorGlyph.GlyphOfScatterShot]: {
			name: "Glyph of Scatter Shot",
			description: "Increases the range of Scatter Shot by $63069s1 yards.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_golemstormbolt.jpg",
		},
		[HunterMajorGlyph.GlyphOfMirroredBlades]: {
			name: "Glyph of Mirrored Blades",
			description: "When attacked by a spell while in Deterrence, you have a $s1% chance to reflect it back at the attacker.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_99.jpg",
		},
		[HunterMajorGlyph.GlyphOfBlackIce]: {
			name: "Glyph of Black Ice",
			description: "While you move through the area affected by your Ice Trap you gain $83559s1% movement speed.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/.jpg",
		},
		[HunterMajorGlyph.GlyphOfTheLeanPack]: {
			name: "Glyph of the Lean Pack",
			description: "Reduces the radius of Aspect of the Pack by $s1 yards.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_aspectmastery.jpg",
		},
		[HunterMajorGlyph.GlyphOfEnduringDeceit]: {
			name: "Glyph of Enduring Deceit",
			description: "Camouflage also reduces spell damage taken by $s1%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg",
		},
	},
	minorGlyphs: {
		[HunterMinorGlyph.GlyphOfAspects]: {
			name: "Glyph of Aspects",
			description: "Each time you activate a new Aspect, an animal companion representing that Aspect will follow you for $122489d.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_aspectmastery.jpg",
		},
		[HunterMinorGlyph.GlyphOfTameBeast]: {
			name: "Glyph of Tame Beast",
			description: "Reduces the time required to complete Tame Beast by ${$m1/-1000} sec.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg",
		},
		[HunterMinorGlyph.GlyphOfRevivePet]: {
			name: "Glyph of Revive Pet",
			description: "Reduces the pushback suffered from damaging attacks while casting Revive Pet by $57866s1%.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beastsoothe.jpg",
		},
		[HunterMinorGlyph.GlyphOfLesserProportion]: {
			name: "Glyph of Lesser Proportion",
			description: "Slightly reduces the size of your pet.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg",
		},
		[HunterMinorGlyph.GlyphOfFireworks]: {
			name: "Glyph of Fireworks",
			description: "Teaches you the ability Fireworks.

Launch fireworks from your gun, bow or crossbow.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_missilelargecluster_red.jpg",
		},
		[HunterMinorGlyph.GlyphOfAspectOfThePack]: {
			name: "Glyph of Aspect of the Pack",
			description: "Increases the range of your Aspect of the Pack ability by $57904s1 yards.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_mount_whitetiger.jpg",
		},
		[HunterMinorGlyph.GlyphOfStampedeHunter]: {
			name: "Glyph of Stampede",
			description: "Your Stampede no longer summons pets from your stable, and instead uses copies of your current pet.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg",
		},
		[HunterMinorGlyph.GlyphOfAspectOfTheCheetah]: {
			name: "Glyph of Aspect of the Cheetah",
			description: "Your Aspect of the Cheetah no longer causes you to be dazed when struck.  Instead, the effect is cancelled and all your Aspects are placed on a $m1 sec cooldown.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_mount_jungletiger.jpg",
		},
		[HunterMinorGlyph.GlyphOfAspectOfTheBeast]: {
			name: "Glyph of Aspect of the Beast",
			description: "Teaches you the ability Aspect of the Beast.

The Hunter takes on the aspects of a beast, becoming untrackable.  Only one Aspect can be active at a time.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_mount_pinktiger.jpg",
		},
		[HunterMinorGlyph.GlyphOfDirection]: {
			name: "Glyph of Direction",
			description: "Causes your Misdirection target to appear larger.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_markedfordeath.jpg",
		},
		[HunterMinorGlyph.GlyphOfMarking]: {
			name: "Glyph of Marking",
			description: "Your Hunter's Mark ability now places a bullseye on your target instead of its usual visual.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_mastermarksman.jpg",
		},
		[HunterMinorGlyph.GlyphOfFetch]: {
			name: "Glyph of Fetch",
			description: "Teaches you the ability Fetch.

Command your pet to retrieve the loot from a nearby corpse within $125050A1 yards.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bone_01.jpg",
		},
		[HunterMinorGlyph.GlyphOfFocusedFire]: {
			name: "Glyph of Focused Fire",
			description: "Focus Fire charges apply a visual to you for each charge active.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_aspectmastery.jpg",
		},
		[HunterMinorGlyph.GlyphOfChameleon]: {
			name: "Glyph of Chameleon",
			description: "Focus Fire charges apply a visual to you for each charge active.",
			iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_aspectmastery.jpg",
		},
	},
};
