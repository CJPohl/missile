import { Flex } from '@chakra-ui/react';
import { SpellDocument } from '../../lib/models/Spell';
import SpellCard from '../spell-card/spell-card';

// Selection of spells for landing page
const LandingSelection = () => {
  interface spellLanding {
    name: string;
    desc: string[];
    range: string;
    level: number;
    price: number;
    school: string;
  }
  const spell1: spellLanding = {
    name: 'Magic Missile',
    desc: [
      'You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.',
    ],
    range: '120 feet',
    level: 1,
    price: 20,
    school: 'evocation',
  };

  const spell2: spellLanding = {
    name: 'Fly',
    desc: [
      'You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.',
    ],
    range: 'Touch',
    level: 3,
    price: 60,
    school: 'transmutation',
  };

  const spell3: spellLanding = {
    name: 'Healing Word',
    desc: [
      'A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
    ],
    range: '60 feet',
    level: 1,
    price: 20,
    school: 'evocation',
  };

  return (
    <Flex py='10rem' justifyContent='center' w='full'>
      <Flex w='full' justifyContent='space-evenly' maxW='container.xl'>
        <SpellCard scale={60} spell={spell1} />
        <SpellCard scale={60} spell={spell2} />
        <SpellCard scale={60} spell={spell3} />
      </Flex>
    </Flex>
  );
};

export default LandingSelection;
