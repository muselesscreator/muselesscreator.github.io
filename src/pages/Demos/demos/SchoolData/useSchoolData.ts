import { StrictDict } from '@muselesscreator/strict-dict';

import data from './data.csv';
import SchoolData from './types';

const useSchoolData = (): SchoolData[] => {
  const schools = (data as Record<string, string>[]).map((school) => {
    
    return StrictDict({
      name: school.BPS_School_Name,
      address: school.BPS_Address,
      grades: school.BPS_Grades_Offered,
      principal: school.BPS_Principal,
      neighborhood: school.BRA_Neighborhood,
      typology: school.SMMA_Typology,
      educationalProgram: school.SMMA_Educational_Program,
      squareFeet: parseInt(school.BPS_Total_GSF),
      totalStudents: parseInt(school.DOE_Total),
      totalEnergyCost: parseInt(
        school[' BPS_Total_Energy_Cost ']
          .replace('$', '')
          .replace(',', '')
      ),
      studentsByGrade: {
        preK: parseInt(school.DOE_PK),
        k: parseInt(school.DOE_K),
        1: parseInt(school.DOE_1),
        2: parseInt(school.DOE_2),
        3: parseInt(school.DOE_3),
        4: parseInt(school.DOE_4),
        5: parseInt(school.DOE_5),
        6: parseInt(school.DOE_6),
        7: parseInt(school.DOE_7),
        8: parseInt(school.DOE_8),
        9: parseInt(school.DOE_9),
        10: parseInt(school.DOE_10),
        11: parseInt(school.DOE_11),
        12: parseInt(school.DOE_12),
        sp: parseInt(school.DOE_SP),
      },
      accessibility: {
        playAreas: school.SMMA_FA_Play_Areas,
        accessibilty: school.SMMA_FA_Accessibility,
        parkingQuality: school.SMMA_FA_Parking_Quality,
        massTransit: school.SMMA_FA_Mass_Transit,
        bikable: school.SMMA_FA_Bikable,
        walkable: school.SMMA_FA_Walkable,
        dropOffPickUp: school.SMMA_FA_DropOff_PickUp,
        adaAccessibility: school.SMMA_FA_MAABADA_Accessibility,
      },
      features: {
        playgrounds: school.SMMA_EA_site_includes_Playgrounds,
        accessible: school.SMMA_EA_site_includes_Accessible,
        playFields: school.SMMA_EA_site_includes_Playfields,
      },
      adequacy: {
        elementary: {
          art: school.SMMA_EA_ES_Adequacy_Art,
          music: school.SMMA_EA_ES_Adequacy_Music,
          gymnasium: school.SMMA_EA_ES_Adequacy_Gymnasium,
          cafeteria: school.SMMA_EA_ES_Adequacy_Cafeteria,
          stage: school.SMMA_EA_ES_Adequacy_Stage,
        },
        middle: {
          art: school.SMMA_EA_MS_Adequacy_Art,
          music: school.SMMA_EA_MS_Adequacy_Music,
          gymnasium: school.SMMA_EA_MS_Adequacy_Gymnasium,
          cafeteria: school.SMMA_EA_MS_Adequacy_Cafeteria,
          stage: school.SMMA_EA_MS_Adequacy_Stage,
        },
        high: {
          art: school.SMMA_EA_HS_Adequacy_Art,
          music: school.SMMA_EA_HS_Adequacy_Music,
          gymnasium: school.SMMA_EA_HS_Adequacy_Gymnasium,
          cafeteria: school.SMMA_EA_HS_Adequacy_Cafeteria,
          stage: school.SMMA_EA_HS_Adequacy_Stage,
        },
      },
    });
  });
  return schools as SchoolData[];
};

export default useSchoolData;

