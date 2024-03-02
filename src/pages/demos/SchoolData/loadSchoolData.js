import { StrictDict } from '@muselesscreator/strict-dict';

const loadSchoolData = (data) => {
  const fields = {};
  const schools = data.map((school) => {
    const loadField = (field) => {
      if (fields[field]) {
        if (!fields[field].includes(school[field])) {
          fields[field].push(school[field]);
        }
      } else {
        fields[field] = [school[field]];
      }
    };
    [
      'BPS_Grades_Offered',
      'BRA_Neighborhood',
      'SMMA_Typology',
      'SMMA_Educational_Program',
      'SMMA_FA_Play_Areas',
      'SMMA_FA_Accessibility',
      'SMMA_FA_Parking_Quality',
      'SMMA_FA_Mass_Transit',
      'SMMA_FA_Bikable',
      'SMMA_FA_Walkable',
      'SMMA_FA_DropOff_PickUp',
      'SMMA_FA_MAABADA_Accessibility',
      'SMMA_EA_site_includes_Playgrounds',
      'SMMA_EA_site_includes_Accessible',
      'SMMA_EA_site_includes_Playfields',
      'SMMA_EA_ES_Adequacy_Art',
      'SMMA_EA_ES_Adequacy_Music',
      'SMMA_EA_ES_Adequacy_Gymnasium',
      'SMMA_EA_ES_Adequacy_Cafeteria',
      'SMMA_EA_ES_Adequacy_Stage',
      'SMMA_EA_MS_Adequacy_Art',
      'SMMA_EA_MS_Adequacy_Music',
      'SMMA_EA_MS_Adequacy_Gymnasium',
      'SMMA_EA_MS_Adequacy_Cafeteria',
      'SMMA_EA_MS_Adequacy_Stage',
      'SMMA_EA_HS_Adequacy_Art',
      'SMMA_EA_HS_Adequacy_Music',
      'SMMA_EA_HS_Adequacy_Gymnasium',
      'SMMA_EA_HS_Adequacy_Cafeteria',
      'SMMA_EA_HS_Adequacy_Stage',
    ].forEach(loadField);

    
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
  return { schools, fields };
};

export default loadSchoolData;

