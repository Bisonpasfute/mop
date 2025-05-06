package balance

import (
	"time"

	"github.com/wowsims/mop/sim/core"
	"github.com/wowsims/mop/sim/core/stats"
	"github.com/wowsims/mop/sim/druid"
)

func (moonkin *BalanceDruid) RegisterBalancePassives() {
	moonkin.registerShootingStars()
	moonkin.registerBalanceOfPower()
	moonkin.registerEuphoria()
	moonkin.registerOwlkinFrenzy()
	moonkin.registerKillerInstinct()
	moonkin.registerLeatherSpecialization()
	moonkin.registerNaturalInsight()
	moonkin.registerTotalEclipse()
	moonkin.registerLunarShower()
}

func (moonkin *BalanceDruid) registerShootingStars() {
	ssCastTimeMod := moonkin.AddDynamicMod(core.SpellModConfig{
		ClassMask:  druid.DruidSpellStarsurge,
		Kind:       core.SpellMod_CastTime_Pct,
		FloatValue: -1,
	})

	ssAura := moonkin.RegisterAura(core.Aura{
		Label:    "Shooting Stars" + moonkin.Label,
		ActionID: core.ActionID{SpellID: 93400},
		Duration: time.Second * 12,
		OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
			if !spell.Matches(druid.DruidSpellStarsurge) {
				return
			}

			ssCastTimeMod.Deactivate()
			aura.Deactivate(sim)
		},
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			ssCastTimeMod.Activate()
			moonkin.Starsurge.CD.Reset()
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			ssCastTimeMod.Deactivate()
		},
	})

	core.MakeProcTriggerAura(&moonkin.Unit, core.ProcTrigger{
		Name:           "Shooting Stars Trigger" + moonkin.Label,
		Callback:       core.CallbackOnPeriodicDamageDealt,
		Outcome:        core.OutcomeCrit,
		ProcChance:     0.3,
		ClassSpellMask: druid.DruidSpellSunfireDoT | druid.DruidSpellMoonfireDoT,
		Handler: func(sim *core.Simulation, _ *core.Spell, result *core.SpellResult) {
			ssAura.Activate(sim)
		},
	})
}

func (moonkin *BalanceDruid) registerBalanceOfPower() {
	moonkin.AddStat(stats.SpellHitPercent, -moonkin.GetBaseStats()[stats.Spirit]/core.SpellHitRatingPerHitPercent)
	moonkin.AddStatDependency(stats.Spirit, stats.SpellHitPercent, 1/core.SpellHitRatingPerHitPercent)
}

func (moonkin *BalanceDruid) registerEuphoria() {}

func (moonkin *BalanceDruid) registerOwlkinFrenzy() {}

func (moonkin *BalanceDruid) registerKillerInstinct() {}

func (moonkin *BalanceDruid) registerLeatherSpecialization() {}

func (moonkin *BalanceDruid) registerNaturalInsight() {}

func (moonkin *BalanceDruid) registerTotalEclipse() {}

func (moonkin *BalanceDruid) registerLunarShower() {}
