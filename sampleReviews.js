// Joseph P. Pasaoa
// Unit 2 Assessment: Studio Ghibli Review App
// SAMPLE REVIEWS ADD-ON
//

const addSampleRevs = (gDataObj) => {
  let g = 0;
  let sampleRevsArr = [
    `It was okay. That's what everyone said. And then I bought the $25 IMAX ticket to watch it in the theatre by myself. Boy was I unimpressed. At least they gave me an extra squirt of butter in my popcorn.`,
    `Not that great. Had the measles.`,
    `FAV. MOVEEE. EVAAA.`,
    `Id zril tempor putant eum, at soluta nusquam epicurei his. Et vix vocent consulatu, eu eum munere inciderint, agam libris vulputate mea ea?`,
    `An usu timeam vituperata assueverit, vel at tation insolens invenire.`,
    `Nec et saepe facilisis! Solet postulant in nam!`,
    `Feugait ponderum no duo, usu quodsi impetus mnesarchum ex, cu vis nonumy diceret? Eos melius luptatum ne.`,
    `Affert latine hendrerit nec te? Ius quot putant consequat an, putent feugiat eu his! Pri at consul eleifend deterruisset, eam ut oratio ponderum. Erant quidam mandamus vix in, ex duis dicat aperiri mea? Nec id habemus consequuntur, sea ut etiam dolores commune?`,
    `Placerat menandri pro ea, eam ne audire ceteros percipit?`,
    `Vulputate eloquentiam cum ne, ea sit quando fuisset pericula. Vel liber iudicabit conclusionemque no?`,

    `Id quaestio qualisque intellegebat sea, atqui labore accusam et eam. Mel in eros expetenda, sea homero disputationi in.`,
    `Aperiam deleniti neglegentur vix ei, probo adhuc docendi et mei, summo scripta ei vim! Ei his nostrud intellegat, eu nonumes corpora vim.`,
    `Nonumy copiosae vel ne, error laboramus reprehendunt at sit? Sit ad alia vero oblique, id pro molestie scaevola ullamcorper, adipisci erroribus quo an.`,
    `Ius cu quodsi latine epicuri, est duis facilisis ut. Quo dolore voluptatum signiferumque in!`,
    `Te dicam gubergren elaboraret eam`,
    `Etiam debitis nominavi quo ea. At vis atomorum suavitate dissentias. Mel indoctum torquatos id?`,
    `Ut ancillae intellegat intellegam vel, harum labitur probatus ad sit! Eu prima periculis ocurreret has.`,
    `Id eum exerci qualisque, ne mea velit munere definitionem. Id sonet detraxit interpretaris cum, at clita invenire mei, virtute offendit cum ad. An nec omnes platonem evertitur, option luptatum mediocritatem te sea?`,
    `Option assentior qui an, nisl eius duo ut, vis omnis nihil tamquam at! Pri graecis nominavi perfecto ea, pri eu timeam appareat constituam. Usu malorum dolores ne, mea in purto complectitur? Veri aperiam nec id, est dicta nihil mediocritatem in?`,
    `Id vix verterem prodesset. An his partem sensibus, sint persius singulis eam id! Eam etiam salutandi sententiae et, officiis detraxit ad vim. Aeterno philosophia sed ea, vim cu habeo vitae feugait?`,

    `Ad iriure omnesque interesset usu.`,
    `Porro possim mea ea, id partem petentium inciderint has? Eos ei purto posse. Semper eirmod sed ex? Suscipit abhorreant mel eu. `,
    `Postulant elaboraret in duo! At viderer voluptaria contentiones pri! Ut vis esse viris tibique! Ius consetetur accommodare an! Eos commune platonem et, est sapientem moderatius ut.`,
    `Sea luptatum dissentias at, ut sea hinc epicurei? Timeam complectitur vis an!`,
    `Ne eum fugit laudem, possit conceptam voluptatibus eos no.`
  ];
  for (let filmObj in gDataObj) {
    gDataObj[filmObj].userReviews.push(sampleRevsArr[g]);
    g += 1;
    if (g % 5 === 1) {
      gDataObj[filmObj].userReviews.push(sampleRevsArr[g]);
      g += 1;
    }
  }
}
