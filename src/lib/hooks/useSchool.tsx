import Abjuration from '../../components/svgs/spells/Abjuration';
import Conjuration from '../../components/svgs/spells/Conjuration';
import Divination from '../../components/svgs/spells/Divination';
import Enchantment from '../../components/svgs/spells/Enchantment';
import Evocation from '../../components/svgs/spells/Evocation';
import Illusion from '../../components/svgs/spells/Illusion';
import Necromancy from '../../components/svgs/spells/Necromancy';
import Transmutation from '../../components/svgs/spells/Transmutation';

// Hook to properly equate school svg with spell school
// school: spell school name
// scale: number for svg to scale size to
const useSchool = (school: string, scale: number) => {
  switch (school) {
    case 'abjuration':
      return <Abjuration scale={scale} />;
    case 'conjuration':
      return <Conjuration scale={scale} />;
    case 'divination':
      return <Divination scale={scale} />;
    case 'enchantment':
      return <Enchantment scale={scale} />;
    case 'evocation':
      return <Evocation scale={scale} />;
    case 'illusion':
      return <Illusion scale={scale} />;
    case 'necromancy':
      return <Necromancy scale={scale} />;
    case 'transmutation':
      return <Transmutation scale={scale} />;
  }
};

export default useSchool;
