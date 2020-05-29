const org = {
  Zuckerberg: {
    Schroepfer: {
      BosWorth: ['Steve', 'Kyle', 'Andra'],
      Zhao: ['Richie', 'Sofia', 'Jen'],
    },
    Schrage: {
      VanDyck: ['Sabrina', 'Michelle', 'Josh'],
    },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes'],
    },
  },
};

const baseOrg = {
  Zuckerberg: ['Steve', 'Kyle', 'Andra'],
};

const orgChart = (data, level = 0, spacer = '    ') => {
  // base case
  if (Array.isArray(data)) {
    data.forEach((d) => {
      console.log(`${spacer.repeat(level)} ${d}`);
    });
    return;
  }
  // recursive case
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${spacer.repeat(level)} ${key}`);
    return orgChart(value, level + 1);
  });
};

console.log(orgChart(org));
