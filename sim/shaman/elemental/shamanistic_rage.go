package elemental

import (
	"time"

	"github.com/wowsims/mop/sim/core"
	"github.com/wowsims/mop/sim/shaman"
)

func (ele *ElementalShaman) registerShamanisticRageSpell() {

	actionID := core.ActionID{SpellID: 30823}
	srMod := ele.AddDynamicMod(core.SpellModConfig{
		Kind:     core.SpellMod_PowerCost_Pct,
		IntValue: -100,
	})
	srAura := ele.RegisterAura(core.Aura{
		Label:    "Shamanistic Rage",
		ActionID: actionID,
		Duration: time.Second * 15,
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			srMod.Activate()
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			srMod.Deactivate()
		},
	})

	spell := ele.RegisterSpell(core.SpellConfig{
		ActionID:       actionID,
		ClassSpellMask: shaman.SpellMaskShamanisticRage,
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer:    ele.NewTimer(),
				Duration: time.Minute * 1,
			},
		},
		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			srAura.Activate(sim)
		},
		RelatedSelfBuff: srAura,
	})

	ele.AddMajorCooldown(core.MajorCooldown{
		Spell: spell,
		Type:  core.CooldownTypeMana,
	})
}
