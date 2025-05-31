package warrior

import (
	"time"

	"github.com/wowsims/mop/sim/core"
	"github.com/wowsims/mop/sim/core/proto"
)

func (warrior *Warrior) registerShieldWallCD() {
	if warrior.OffHand().WeaponType != proto.WeaponType_WeaponTypeShield {
		return
	}

	duration := time.Second * 12
	hasGlyph := warrior.HasMajorGlyph(proto.WarriorMajorGlyph_GlyphOfShieldWall)
	//This is the inverse of the tooltip since it is a damage TAKEN coefficient
	damageTaken := core.TernaryFloat64(hasGlyph, 0.6, 0.4)

	actionID := core.ActionID{SpellID: 871}
	swAura := warrior.RegisterAura(core.Aura{
		Label:    "Shield Wall",
		ActionID: actionID,
		Duration: duration,
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			warrior.PseudoStats.DamageTakenMultiplier *= damageTaken
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			warrior.PseudoStats.DamageTakenMultiplier /= damageTaken
		},
	})

	cooldownDur := time.Minute * 5

	swSpell := warrior.RegisterSpell(core.SpellConfig{
		ActionID:       actionID,
		ClassSpellMask: SpellMaskShieldWall,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: 0,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer:    warrior.NewTimer(),
				Duration: cooldownDur,
			},
		},

		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, spell *core.Spell) {
			swAura.Activate(sim)
		},
	})

	warrior.AddMajorCooldown(core.MajorCooldown{
		Spell: swSpell,
		Type:  core.CooldownTypeSurvival,
	})
}
