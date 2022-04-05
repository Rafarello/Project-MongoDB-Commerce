db.produtos.find(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "proteínas",
        quantidade: { $gte: 30, $lte: 40 },
      },
    },
  },
  { _id: 0, nome: 1 },
);