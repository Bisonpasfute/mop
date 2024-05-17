package hunter

import (
	"github.com/wowsims/cata/sim/core/proto"
	"github.com/wowsims/cata/sim/core/stats"
)

func (hunter *Hunter) ApplyTalents() {
	hunter.ApplyArmorSpecializationEffect(stats.Agility, proto.ArmorType_ArmorTypeMail)

	if hunter.Pet != nil {
		hunter.applyFrenzy()
		hunter.registerBestialWrathCD()
		// Todo: BM stuff
		hunter.Pet.ApplyTalents()
	}

	//Apply Survival Talents
	hunter.ApplySurvivalTalents()

	//Apply MM Talents
	hunter.ApplyMMTalents()

	//Apply BM Talents
	hunter.ApplyBMTalents()
}
