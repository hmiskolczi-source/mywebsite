/** Services shown in the public appointment request form. */
export const bookingServices = [
  { id: 'pmu_consultation', label: 'Személyes sminktetoválási konzultáció', category: 'pmu' },
  { id: 'pmu_eyebrows', label: 'Szemöldöktetoválás', category: 'pmu' },
  { id: 'pmu_eyeliner', label: 'Szemhéjtetoválás', category: 'pmu' },
  { id: 'pmu_lips', label: 'Ajaktetoválás', category: 'pmu' },
  { id: 'pmu_correction', label: 'Korrekció', category: 'pmu' },
  { id: 'makeup', label: 'Professzionális smink', category: 'makeup' },
  { id: 'school_basic', label: 'Pro Makeup Mentorprogram', category: 'school' },
  { id: 'school_advanced', label: 'Haladó mesterprogram', category: 'school' },
  { id: 'school_competition', label: 'Versenyfelkészítés', category: 'school' },
  { id: 'school_self', label: 'Privát önsminkelés', category: 'school' },
] as const;
