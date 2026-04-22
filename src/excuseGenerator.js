function generateExcuse(category) {
  const FRAGMENTS = {
    bug: {
      subjects: [
        'The bug',
        'The crash',
        'The null pointer',
        'The infinite loop'
      ],
      verbs: ['happens because', 'is caused by', 'only appears when'],
      reasons: [
        'Mercury is in retrograde',
        'the intern touched it',
        'the semicolons unionized',
        'the cache disagrees with reality'
      ]
    },
    deadline: {
      subjects: ['The deadline', 'The release', 'The launch'],
      verbs: ['slipped because', 'moved because', 'exists because'],
      reasons: [
        'requirements changed mid-sprint',
        'the scope creep was aggressive',
        'we discovered a legacy system nobody remembered'
      ]
    },
    meeting: {
      subjects: ['The meeting', 'The standup', 'The retro'],
      verbs: [
        'was pointless because',
        'ran long because',
        'was rescheduled because'
      ],
      reasons: [
        'half the team was in another timezone',
        'someone discovered Miro',
        'the product manager wanted to sync about syncs'
      ]
    },
    production: {
      subjects: ['Production', 'The server', 'The database'],
      verbs: ['went down because', 'is slow because', 'misbehaves because'],
      reasons: [
        'a Friday deploy was involved',
        'someone ran a migration on prod',
        'the load balancer is having an existential crisis'
      ]
    }
  };

  // TODO (you): implement this function.
  //
  // Expected behavior:
  //   1. If `category` is not one of CATEGORIES, return `Unknown category: <the value>`
  //   2. Otherwise, pick a random subject, verb, and reason from
  //      FRAGMENTS[category] and return a single string joined by spaces,
  //      ending with a period. Example output:
  //      "The bug happens because the semicolons unionized."
  //
  // Hints:
  //   - Use pickRandom().
  //   - Remember to add the "." at the end.
  //   - The function should be a pure function: same inputs won't
  //     always produce same outputs (because of randomness), but given
  //     the FRAGMENTS data it should never return undefined or null.

  // Your code here

  if (!FRAGMENTS[category]) {
    return `Unknown category: ${category}`;
  }

  const subject = pickRandom(FRAGMENTS[category].subjects);
  const verb = pickRandom(FRAGMENTS[category].verbs);
  const reason = pickRandom(FRAGMENTS[category].reasons);
  return `${subject} ${verb} ${reason}.`;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
module.exports = { generateExcuse };
