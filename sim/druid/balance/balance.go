package balance

import (
	"github.com/wowsims/mop/sim/core"
	"github.com/wowsims/mop/sim/core/proto"
	"github.com/wowsims/mop/sim/druid"
)

const (
	WrathBaseEnergyGain     float64 = 15
	StarsurgeBaseEnergyGain float64 = 20
	StarfireBaseEnergyGain  float64 = 20
)

func RegisterBalanceDruid() {
	core.RegisterAgentFactory(
		proto.Player_BalanceDruid{},
		proto.Spec_SpecBalanceDruid,
		func(character *core.Character, options *proto.Player) core.Agent {
			return NewBalanceDruid(character, options)
		},
		func(player *proto.Player, spec interface{}) {
			playerSpec, ok := spec.(*proto.Player_BalanceDruid)
			if !ok {
				panic("Invalid spec value for Balance Druid!")
			}
			player.Spec = playerSpec
		},
	)
}

func NewBalanceDruid(character *core.Character, options *proto.Player) *BalanceDruid {
	balanceOptions := options.GetBalanceDruid()
	selfBuffs := druid.SelfBuffs{}

	moonkin := &BalanceDruid{
		Druid:            druid.New(character, druid.Moonkin, selfBuffs, options.TalentsString),
		Options:          balanceOptions.Options,
		EclipseEnergyMap: make(EclipseEnergyMap),
	}

	moonkin.SelfBuffs.InnervateTarget = &proto.UnitReference{}
	if balanceOptions.Options.ClassOptions.InnervateTarget != nil {
		moonkin.SelfBuffs.InnervateTarget = balanceOptions.Options.ClassOptions.InnervateTarget
	}

	return moonkin
}

type BalanceDruid struct {
	*druid.Druid
	eclipseEnergyBar
	Options *proto.BalanceDruid_Options

	EclipseEnergyMap EclipseEnergyMap

	Starfire  *druid.DruidSpell
	Starsurge *druid.DruidSpell
	Sunfire   *druid.DruidSpell
	Starfall  *druid.DruidSpell
}

func (moonkin *BalanceDruid) GetDruid() *druid.Druid {
	return moonkin.Druid
}

func (moonkin *BalanceDruid) Initialize() {
	moonkin.Druid.Initialize()

	moonkin.RegisterBalancePassives()

	moonkin.RegisterBalanceSpells()
}

func (moonkin *BalanceDruid) ApplyTalents() {

	// moonkin.EnableEclipseBar()
	// moonkin.RegisterEclipseAuras()
	// moonkin.RegisterEclipseEnergyGainAura()

	// Apply druid talents
	// moonkin.Druid.ApplyTalents()
}

func (moonkin *BalanceDruid) Reset(sim *core.Simulation) {
	moonkin.Druid.Reset(sim)
	//moonkin.RebirthTiming = moonkin.Env.BaseDuration.Seconds() * sim.RandomFloat("Rebirth Timing")
}
