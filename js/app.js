const VERSION = 'uxpass_v09_feedback_patch';

const chapters = [
  { id:'c1', title:'UX概論', goal:'UX・UI・ユーザビリティ・CXの違いを、場面で判断できる', lessons:['l1','l2','l3','l4'] },
  { id:'c2', title:'HCD', goal:'人間中心設計の流れと、解決策に飛びつかない理由を理解する', lessons:['l5','l6','l7'] },
  { id:'c3', title:'リサーチ', goal:'知りたいことに応じて調査方法を選べる', lessons:['l8','l9','l10','l11'] },
  { id:'c4', title:'分析・要求定義', goal:'調査結果から利用者像・利用場面・要求を整理できる', lessons:['l12','l13','l14'] },
  { id:'c5', title:'設計・評価', goal:'プロトタイプと評価を改善サイクルとして使える', lessons:['l15','l16','l17','l18'] },
  { id:'c6', title:'組織導入', goal:'UXを一回の施策ではなく組織活動として捉える', lessons:['l19','l20'] }
];

const termDict = {
  'UX': { title:'UX', desc:'利用者が製品・サービスと関わる前・中・後に得る体験全体。画面の見た目だけではなく、期待・不安・達成感・継続利用まで含む。', tags:['UX概論','超頻出','UIとの違い'] },
  'UI': { title:'UI', desc:'利用者が直接触れる画面・ボタン・入力欄・表示などの接点。UXの一部だが、UIが良いだけでUX全体が良いとは限らない。', tags:['UX概論','比較頻出'] },
  'ユーザビリティ': { title:'ユーザビリティ', desc:'特定の利用状況で、利用者が目的を有効・効率的・満足して達成できる度合い。UX全体の中でも「使いやすさ」に近い概念。', tags:['UX概論','ISO','比較頻出'] },
  'CX': { title:'CX', desc:'顧客が企業・ブランドとの接点全体で得る体験。UXよりも企業やブランドとの関係全体を広く捉える文脈で使われることが多い。', tags:['UX概論','比較'] },
  'HCD': { title:'HCD（人間中心設計）', desc:'利用者や利用状況を理解し、その理解にもとづいて設計・評価・改善を反復する考え方。解決策から始めず、利用者理解から始める。', tags:['HCD','超頻出'] },
  '要求定義': { title:'要求定義', desc:'利用者・業務・組織・技術などの条件を整理し、満たすべき要求を明らかにする活動。発言された要望をそのまま機能化することではない。', tags:['HCD','分析','頻出'], compare:'要件定義は、実現する機能や仕様として落とし込む工程の意味で使われることが多い。UX検定では、まず利用者の目的・状況・課題を要求として整理する視点が重要。' },
  '要件定義': { title:'要件定義', desc:'要求をもとに、システムやサービスで実現する条件・仕様を整理する活動。要求定義より実装寄りの意味で使われることが多い。', tags:['分析','比較'], compare:'要求定義は「何が必要か・なぜ必要か」を整理する寄り。要件定義は「どう満たすか・何を作るか」へ落とす寄り。' },
  '利用状況': { title:'利用状況', desc:'誰が、どこで、何のために、どんな制約の中で使うかという文脈。調査や評価の前提になる。', tags:['HCD','リサーチ'] },
  'インタビュー': { title:'インタビュー', desc:'利用者の考え・背景・理由を深く聞く調査。直近の具体的な行動を聞くと、要求や課題を掘り下げやすい。', tags:['リサーチ','定性'] },
  'アンケート': { title:'アンケート', desc:'多人数から傾向を把握する調査。理由の深掘りは苦手なので、インタビューや観察と組み合わせるとよい。', tags:['リサーチ','定量'] },
  '観察調査': { title:'観察調査', desc:'実際の行動や環境を観察し、本人が言語化しにくい課題を見つける調査。発言と行動がズレるときに有効。', tags:['リサーチ','定性'] },
  'ログ分析': { title:'ログ分析', desc:'サービス上の行動データから、利用量・離脱箇所・頻度などを把握する方法。理由の解釈には別の調査が必要になる。', tags:['リサーチ','定量'] },
  'ペルソナ': { title:'ペルソナ', desc:'代表的な利用者像。年齢や職業だけでなく、目的・状況・課題・行動特性が設計判断に使える形で整理されている必要がある。', tags:['分析','頻出'], compare:'ターゲットは集団の範囲を示しやすく、ペルソナは具体的な人物像として理解を揃える。' },
  'シナリオ': { title:'シナリオ', desc:'ペルソナが、どの状況で、何を達成しようとして、どう行動するかを表したもの。人物像ではなく利用場面と流れに注目する。', tags:['分析','比較頻出'] },
  'カスタマージャーニー': { title:'カスタマージャーニー', desc:'利用者が目的達成までに経験する行動・感情・接点・課題を時系列で整理する方法。画面単体ではなく体験の流れを見る。', tags:['分析','頻出'] },
  'タッチポイント': { title:'タッチポイント', desc:'利用者とサービス・企業が接する点。Web画面、メール、窓口、通知、問い合わせなど。', tags:['分析'] },
  'プロトタイプ': { title:'プロトタイプ', desc:'仮説を早く試すための試作品。完成品ではなく、流れ・理解・操作などを低コストで検証するために使う。', tags:['設計','評価'] },
  'ユーザビリティテスト': { title:'ユーザビリティテスト', desc:'利用者に実際のタスクを行ってもらい、目的達成のしやすさやつまずきを確認する評価方法。', tags:['評価','頻出'] },
  '形成的評価': { title:'形成的評価', desc:'設計途中で改善点を見つけるための評価。完成後の採点ではなく、改善サイクルに組み込む。', tags:['評価'] },
  '総括的評価': { title:'総括的評価', desc:'完成度や目標達成を確認するための評価。リリース判断や成果確認に近い。', tags:['評価'] }
};

const lessons = [
  {id:'l1',chapter:'UX概論',title:'UXはどこまでを含むのか',minutes:5,terms:['UX','UI','ユーザビリティ','CX'],intro:'まず全体地図：UX検定では「画面を直す」より前に、利用者が目的を達成する一連の体験を捉えられるかが問われる。',body:`UXは、利用者が製品やサービスと関わる前・中・後に得る体験全体を指す。画面の見た目や操作しやすさは重要だが、それだけでUXが良いとは限らない。たとえば、予約画面は操作しやすくても、予約後に確認メールが来ず不安になるなら体験全体の評価は下がる。\n\n最初に押さえるべきつながりは、UIは接点、ユーザビリティは使いやすさ、UXは体験全体という関係である。CXは企業やブランドとの関係まで広く捉える場合に使われる。`},
  {id:'l2',chapter:'UX概論',title:'UX・UI・ユーザビリティを見分ける',minutes:6,terms:['UX','UI','ユーザビリティ'],intro:'この章の山場：似た言葉を定義で覚えるのではなく、ケースで「どの範囲の話か」を見分ける。',body:`UIは、利用者が直接触れる画面・ボタン・入力欄・表示である。ユーザビリティは、特定の利用状況で目的を有効・効率的・満足して達成できる度合いである。\n\nUXは、それらを含みつつ、利用前の期待、利用中の感情、利用後の印象や継続意向まで含む。試験では「操作は簡単だが不安が残る」「画面はきれいだが目的達成できない」のようなケースで、単なるUI評価に閉じない判断が求められる。`},
  {id:'l3',chapter:'UX概論',title:'体験価値とビジネス価値',minutes:5,terms:['UX','CX'],intro:'UXは利用者のためだけではなく、継続利用・信頼・問い合わせ削減など事業成果ともつながる。',body:`UX改善は、利用者の満足だけでなく、解約率の低下、問い合わせ削減、継続利用、ブランド信頼などにも関わる。\n\nただし、事業側の都合だけで機能を増やすと、利用者にとっての体験価値が下がることがある。UX検定では、利用者価値と事業目的を対立ではなく、両方を満たす設計課題として捉える姿勢が重要である。`},
  {id:'l4',chapter:'UX概論',title:'よくある早とちり：画面改善に飛びつく',minutes:5,terms:['UX','UI','利用状況'],intro:'本番でよく問われる考え方：原因不明のまま色や配置を変えない。',body:`購入率や申込率が低いと、すぐにボタン色やレイアウトを変えたくなる。しかしUXの考え方では、まず利用者がどの場面で何に困っているかを確認する。\n\nUI変更は有効な改善案になりうるが、それは原因を把握した後である。問題の原因が情報不足、信頼不安、手続きの長さ、利用環境の制約にある場合、単なる色変更では効果が薄い。`},
  {id:'l5',chapter:'HCD',title:'HCDは解決策から始めない',minutes:6,terms:['HCD','利用状況','形成的評価'],intro:'HCDの全体像：理解する→要求を整理する→設計する→評価する、を反復する。',body:`HCDは、人間の特性や利用状況を理解し、その理解にもとづいて設計・評価・改善を反復する考え方である。最初から「ボタンを変える」「機能を増やす」と決めるのではなく、誰が、どの状況で、何に困っているのかを確認する。\n\nここでのポイントは、調査・設計・評価が一直線ではなく反復すること。評価で課題が見つかれば、要求や設計に戻って見直す。`},
  {id:'l6',chapter:'HCD',title:'要求定義と要件定義の違い',minutes:6,terms:['要求定義','要件定義','ステークホルダー'],intro:'混同注意：利用者の要望をそのまま機能名に変換するのが要求定義ではない。',body:`要求定義では、利用者が発言した「欲しい機能」だけを見るのではなく、その背景にある目的・制約・業務・感情・組織側の条件を整理する。\n\n要件定義は、整理した要求をもとに、システムやサービスで実現する条件や仕様へ落とし込む文脈で使われることが多い。UX検定では、利用者が言った要望をそのまま実装する選択肢には注意する。なぜ必要なのか、どの状況で何を達成したいのかを確認する。`},
  {id:'l7',chapter:'HCD',title:'ステークホルダーの要望をどう扱うか',minutes:5,terms:['ステークホルダー','要求定義','HCD'],intro:'社内要望も重要。ただし、それだけで設計を決めない。',body:`事業部、開発者、運用担当、利用者など、サービスには複数のステークホルダーが関わる。社内要望は制約や事業目的を知る手がかりになるが、それだけで利用者体験が良くなるとは限らない。\n\nHCDでは、ステークホルダーの要求と利用者の目的・状況を整理し、矛盾や優先順位を明確にする。声の大きい人の意見をそのまま採用するのではなく、根拠にもとづいて判断する。`},
  {id:'l8',chapter:'リサーチ',title:'調査手法は「何を知りたいか」で選ぶ',minutes:6,terms:['インタビュー','アンケート','観察調査','ログ分析'],intro:'リサーチの全体像：調査手法名を覚えるより、目的に応じて使い分ける。',body:`インタビューは考えや背景を深く知るのに向き、アンケートは多数の傾向把握に向く。観察調査は、本人が言語化できない行動や環境要因を見つけやすい。ログ分析は実際の行動量や離脱箇所を把握しやすい。\n\nどれも万能ではない。たとえば「なぜ不安なのか」を知りたいならインタビューが有効だが、「どの画面で離脱しているか」はログ分析が向く。発言と行動がズレるなら観察も必要になる。`},
  {id:'l9',chapter:'リサーチ',title:'インタビューで聞くべきこと',minutes:5,terms:['インタビュー','誘導質問'],intro:'「この機能ほしいですか？」ではなく、直近の行動を聞く。',body:`インタビューでは、意見や希望だけでなく、実際に何をしたか、どの場面で困ったかを聞く。\n\n「この機能があったら便利ですか？」は肯定されやすい。代わりに「最後に予約したとき、どこで迷いましたか」「そのとき何を確認しましたか」のように、具体的な経験を聞くと要求の背景が見えやすい。`},
  {id:'l10',chapter:'リサーチ',title:'観察で見えるもの',minutes:5,terms:['観察調査','利用状況'],intro:'本人が困っていないと言っていても、行動では困っている場合がある。',body:`観察調査では、利用者の実際の行動、手が止まる場面、周囲の環境、使われ方の工夫などを見る。\n\n本人が「困っていない」と言っても、実際には何度も戻る、メモを見る、隣の人に聞くなどの行動があるかもしれない。こうした言語化されない課題は、観察によって発見しやすい。`},
  {id:'l11',chapter:'リサーチ',title:'定量と定性を組み合わせる',minutes:6,terms:['アンケート','ログ分析','インタビュー'],intro:'数字は「どこで起きているか」、声や観察は「なぜ起きているか」を補う。',body:`ログ分析やアンケートは、傾向や規模を把握しやすい。一方で、なぜそうなっているのか、どのような背景があるのかは、インタビューや観察で補う必要がある。\n\n本番では「ログで離脱箇所が分かった。次に何をするか」のように、複数手法を組み合わせる判断が問われやすい。`},
  {id:'l12',chapter:'分析・要求定義',title:'ペルソナは設計判断に使う',minutes:5,terms:['ペルソナ','ターゲット','シナリオ'],intro:'ペルソナはプロフィール帳ではなく、判断基準をそろえる道具。',body:`ペルソナは代表的な利用者像を具体化し、関係者間で利用者理解を揃えるために使う。年齢や職業だけでは不十分で、目的、状況、課題、行動特性が設計判断に使える必要がある。\n\nターゲットは「誰向けか」の範囲を示すのに向き、ペルソナは具体的な利用者像として議論の基準になる。シナリオは、その人物がどの状況で何を達成しようとするかを表す。`},
  {id:'l13',chapter:'分析・要求定義',title:'シナリオで利用場面を描く',minutes:5,terms:['シナリオ','利用状況','要求定義'],intro:'人物像だけでは使われ方は分からない。場面と流れで考える。',body:`シナリオは、利用者がどのような状況で、何を達成するために、どのようにサービスを使うかを描く。\n\nたとえば同じ予約サービスでも、通勤中にスマホで急いで予約する人と、家族と相談しながらPCで予約する人では、必要な情報や不安点が異なる。シナリオは要求を具体化する手がかりになる。`},
  {id:'l14',chapter:'分析・要求定義',title:'カスタマージャーニーで体験の流れを見る',minutes:6,terms:['カスタマージャーニー','タッチポイント'],intro:'画面単体ではなく、利用前後も含めて課題を見つける。',body:`カスタマージャーニーは、利用者が目的達成までに経験する行動・感情・接点・課題を時系列で整理する。\n\n申込画面だけを見ても分からない不安が、比較段階や申込後の確認メールで見つかることがある。UX検定では、課題がどの時点の体験にあるかを読み取る問題が出やすい。`},
  {id:'l15',chapter:'設計・評価',title:'プロトタイプは早く学ぶための道具',minutes:5,terms:['プロトタイプ','ワイヤーフレーム'],intro:'完成品を作る前に、低コストで仮説を試す。',body:`プロトタイプは完成品ではなく、仮説を早く試すための表現である。紙、ワイヤーフレーム、クリック可能な画面など、検証したい内容に応じて忠実度を選ぶ。\n\n見た目を作り込む前に、情報の流れ、操作の理解、タスクの達成しやすさを確認できる。`},
  {id:'l16',chapter:'設計・評価',title:'ユーザビリティテストで見ること',minutes:5,terms:['ユーザビリティテスト','ユーザビリティ'],intro:'好き嫌いを聞くのではなく、目的達成の過程を見る。',body:`ユーザビリティテストでは、利用者に実際のタスクを行ってもらい、どこで迷うか、どの情報で判断するか、目的を達成できるかを見る。\n\n「この画面は好きですか」だけでは不十分で、タスク達成、時間、エラー、発話、迷いの箇所などを確認する。`},
  {id:'l17',chapter:'設計・評価',title:'形成的評価と総括的評価',minutes:5,terms:['形成的評価','総括的評価'],intro:'評価は最後の採点だけではない。改善の途中で行う評価が重要。',body:`形成的評価は、設計途中で改善点を見つけるための評価である。総括的評価は、完成度や目標達成を確認するために行う。\n\nUX検定では、評価を最後のチェックだけと捉える選択肢に注意する。HCDでは評価結果をもとに設計へ戻り、改善を反復する。`},
  {id:'l18',chapter:'設計・評価',title:'評価結果を改善に戻す',minutes:5,terms:['HCD','ユーザビリティテスト','反復'],intro:'テスト結果は報告で終わりではなく、設計変更につなげる。',body:`ユーザビリティテストで同じ箇所に迷いが集まった場合、それは参加者の問題ではなく設計上の課題として扱う。\n\n迷いの原因を分析し、ラベル、情報構造、導線、入力形式などを見直す。修正後に再評価することで、改善サイクルが回る。`},
  {id:'l19',chapter:'組織導入',title:'UXは個人技ではなく組織活動',minutes:5,terms:['ステークホルダー','HCD'],intro:'良いUXを継続するには、関係者間で利用者理解を共有する必要がある。',body:`UXは一人のデザイナーだけで作るものではない。企画、開発、営業、サポート、経営など、多くの関係者が体験に影響する。\n\n調査結果やペルソナ、ジャーニーを共有し、意思決定に使える形にすることで、組織として人間中心の判断をしやすくなる。`},
  {id:'l20',chapter:'組織導入',title:'UX活動を継続する',minutes:5,terms:['HCD','評価','ログ分析'],intro:'一度調査して終わりではなく、運用しながら学び続ける。',body:`利用者や市場、技術、組織の状況は変化する。リリース後もログ、問い合わせ、調査、評価を通じて体験を見直す必要がある。\n\nUX活動を継続するには、成果指標、役割、意思決定の場、学びを共有する仕組みが必要になる。`}
];

const comparisons = [
  {a:'UX',b:'UI',left:'利用前・利用中・利用後を含む体験全体。感情や期待も含む。',right:'画面、ボタン、入力欄など利用者が接する接点。'},
  {a:'ユーザビリティ',b:'UX',left:'特定状況で目的達成しやすいか。使いやすさ寄り。',right:'使いやすさに加え、期待・感情・利用後の印象まで含む。'},
  {a:'要求定義',b:'要件定義',left:'何が必要か、なぜ必要かを利用者・業務・制約から整理する。',right:'要求を実現するための仕様や条件へ落とし込む。'},
  {a:'ペルソナ',b:'シナリオ',left:'代表的な利用者像。目的・状況・課題を持つ人物像。',right:'その人物が目的達成のために行動する流れや場面。'},
  {a:'インタビュー',b:'観察調査',left:'考え・背景・理由を深く聞く。発言ベース。',right:'実際の行動・環境・無意識のつまずきを見る。'},
  {a:'カスタマージャーニー',b:'サービスブループリント',left:'利用者視点で行動・感情・接点を時系列に整理。',right:'顧客接点に加え、裏側の業務や仕組みも整理。'},
  {a:'形成的評価',b:'総括的評価',left:'途中で改善点を見つけるための評価。',right:'完成度や目標達成を確認する評価。'}
];

const questions = [
  {id:'q1',type:'case',area:'UX概論',q:'ECサイトの購入完了率が下がっている。アクセス解析では、商品詳細からカート投入までは多いが、支払い方法選択で離脱が多い。最初に検討すべき対応として最も適切なのはどれか。',choices:['支払い方法選択の表示内容や不安要因を確認し、離脱理由を調べる','トップページのメインビジュアルを刷新し、サイト全体の印象を変える','商品詳細ページの商品写真を増やし、カート投入数をさらに増やす','購入完了後のサンクスページにキャンペーンを追加する'],answer:0,explain:'離脱が支払い方法選択に集中しているため、その場面の不安・理解不足・入力負荷を確認するのが先。全体の印象変更や完了後ページ改善は、今回見えている離脱箇所への対応としては優先度が低い。'},
  {id:'q2',type:'compare',area:'UX概論',q:'あるサービスは画面操作が簡単でエラーも少ない。しかし、申込後に確認連絡がなく、利用者から「本当に予約できたか不安」と評価されている。この状況の捉え方として最も適切なのはどれか。',choices:['操作中のユーザビリティは大きな問題ではないが、利用後を含むUXに課題がある','画面操作が簡単なら、利用後の不安はUX評価の対象ではない','確認連絡は運用部門の問題なので、サービス体験とは分けて評価する','エラーが少ないため、UX・UI・CXのいずれにも課題はない'],answer:0,explain:'UXは利用後の安心感も含む。ユーザビリティが一定水準でも、確認連絡や不安解消が弱ければ体験全体の評価は下がる。'},
  {id:'q3',type:'case',area:'HCD',q:'自治体のオンライン申請サービスで、高齢者の利用率が低い。担当者は「文字サイズを大きくすれば解決する」と考えている。HCDの進め方として最も適切なのはどれか。',choices:['実際の利用者・利用環境・つまずき箇所を確認してから改善方針を決める','高齢者向けなので、まず文字サイズを最大にして公開する','若年層の利用者にヒアリングし、申請画面の印象を確認する','職員が使いやすい画面を作れば、利用者にも使いやすいと判断する'],answer:0,explain:'文字サイズは改善候補だが、原因とは限らない。端末、入力内容、本人確認、専門用語、家族の支援など利用状況を確認してから要求や改善方針を整理する。'},
  {id:'q4',type:'method',area:'リサーチ',q:'新サービスの改善で、問い合わせログから「申込条件が分からない」という声が多いことが分かった。次に、利用者がどの情報で迷っているかを具体的に把握したい。最も適切な調査はどれか。',choices:['該当利用者に直近の申込検討の流れを聞くインタビューを行う','全利用者にブランド認知度を聞くアンケートを行う','開発メンバーだけで申込条件ページを読み合わせる','競合サービスの配色を収集して比較する'],answer:0,explain:'「どの情報で、なぜ迷ったか」を具体化したいので、直近の経験を聞くインタビューが向く。認知度調査や配色比較では、申込条件の理解課題には届きにくい。'},
  {id:'q5',type:'method',area:'リサーチ',q:'業務システムの入力画面で、利用者は「慣れれば問題ない」と答えるが、観察すると入力前に紙のメモや別システムを何度も確認している。次に重視すべき観点はどれか。',choices:['発言だけでなく、実際の作業環境や前後の行動を含めて課題を整理する','慣れれば問題ないという発言を優先し、現行画面を維持する','確認している紙のメモを禁止し、システムだけを使わせる','入力画面の色調を変え、作業の印象を明るくする'],answer:0,explain:'発言と行動がずれている。観察から、画面単体ではなく作業環境・前後工程・情報不足を含めて要求を整理する。'},
  {id:'q6',type:'compare',area:'リサーチ',q:'「多くの利用者がどの選択肢を選ぶか」と「なぜその選択肢を選ぶのか」を把握したい。調査の組み合わせとして最も適切なのはどれか。',choices:['アンケートで傾向を把握し、インタビューで理由を深掘りする','インタビューだけで割合を正確に推定し、アンケートは行わない','観察調査で選択肢の人気度だけを数え、理由は推測する','ログ分析で理由を断定し、利用者に確認しない'],answer:0,explain:'量の傾向はアンケート、理由の深掘りはインタビューが向く。ログや観察も有効だが、理由を断定するには追加確認が必要。'},
  {id:'q7',type:'case',area:'分析・要求定義',q:'調査で「通知がほしい」という要望が複数出た。要求定義として最も適切な進め方はどれか。',choices:['通知が必要になる場面・知りたい内容・失敗したときの影響を整理する','要望数が多いので、通知頻度をできるだけ増やす','通知機能を追加し、詳細条件はリリース後に決める','通知文面をデザイナーの好みに合わせて先に決める'],answer:0,explain:'要求定義では、要望をそのまま機能化せず、背景にある目的や利用場面を整理する。通知が解決策として妥当かも検討する。'},
  {id:'q8',type:'compare',area:'分析・要求定義',q:'新サービスの検討で「30代会社員向け」と整理した後、代表的な利用者像として、目的・制約・行動特性まで具体化した。後者に最も近いものはどれか。',choices:['ペルソナ','シナリオ','タッチポイント','総括的評価'],answer:0,explain:'代表的な利用者像を具体化したものはペルソナ。シナリオはその人物が利用する場面や流れ、タッチポイントは接点、総括的評価は評価の種類。'},
  {id:'q9',type:'case',area:'分析・要求定義',q:'旅行予約サービスで、比較検討、予約、移動前日、旅行後の各段階ごとに、利用者の行動・感情・接点を整理したい。最も適切な手法はどれか。',choices:['カスタマージャーニーマップ','ユーザビリティテスト','ステークホルダーマップ','ABテスト'],answer:0,explain:'時系列で行動・感情・接点を整理するならカスタマージャーニーマップが適切。ユーザビリティテストは具体的なタスク実行の評価に向く。'},
  {id:'q10',type:'case',area:'設計・評価',q:'予約フローの改善案が2つある。開発前に、利用者がどちらの流れを理解しやすいか確認したい。次に行うこととして最も適切なのはどれか。',choices:['低忠実度のプロトタイプを作り、代表的なタスクで試してもらう','両方を本番実装し、問い合わせが増えた方を取り下げる','関係者の多数決で画面案を決める','色やアイコンを先に完成品質まで作り込む'],answer:0,explain:'理解しやすさを早く確認したい段階では、低忠実度のプロトタイプでタスクを試すのがよい。完成品質まで作り込む前に学習する。'},
  {id:'q11',type:'case',area:'設計・評価',q:'ユーザビリティテストで、参加者の多くが「次へ」ボタンに気づかず、申込を中断した。評価結果の扱いとして最も適切なのはどれか。',choices:['ボタンの位置・ラベル・視線誘導を見直し、修正後に再評価する','参加者が不慣れだったとして、結果を集計から除外する','申込中断は想定内として、説明文だけを長くする','テストを終了し、すぐに総括的評価として合格にする'],answer:0,explain:'同じ箇所で迷いが集中しているため、設計上の課題として改善に戻す。HCDでは評価結果を反復的に設計へ反映する。'},
  {id:'q12',type:'compare',area:'設計・評価',q:'開発途中の画面案で改善点を見つける評価と、リリース前に目標達成度を確認する評価の組み合わせとして最も適切なのはどれか。',choices:['形成的評価と総括的評価','ログ分析とペルソナ','シナリオとタッチポイント','要求定義と要件定義'],answer:0,explain:'途中で改善点を見つけるのが形成的評価、完成度や目標達成を確認するのが総括的評価。'},
  {id:'q13',type:'case',area:'UX概論',q:'アプリのレビューでは「機能は便利だが、初期設定が複雑で使い始める前に疲れる」という声が多い。UXの観点で最も適切な捉え方はどれか。',choices:['利用前から利用開始までの体験にも課題がある','便利な機能があるためUXに課題はない','初期設定は利用前なのでUXの対象外である','レビューの感情表現は評価に含めない'],answer:0,explain:'UXは利用前や使い始めの期待・不安・負荷も含む。機能価値が高くても、オンボーディングでつまずけば体験は悪化する。'},
  {id:'q14',type:'case',area:'HCD',q:'社内では「全ユーザーに同じ導線でよい」と考えていたが、調査で初心者と熟練者の目的・頻度・必要情報が大きく違うと分かった。次に行うこととして最も適切なのはどれか。',choices:['利用者群ごとの目的・利用状況を整理し、要求や導線の違いを検討する','最も利用頻度が高い熟練者だけに合わせて他を切り捨てる','全員に同じ説明を長く表示し、差を吸収する','調査結果は例外として扱い、当初案を維持する'],answer:0,explain:'利用者群によって目的や状況が違うなら、要求や情報設計の違いを整理する。全員を同じに扱うと、どちらにも合わない体験になる可能性がある。'},
  {id:'q15',type:'method',area:'リサーチ',q:'新機能の利用率が低い。ログでは「機能紹介ページは見られているが、実行ボタンが押されない」ことが分かった。次に理由を明らかにする調査として適切なのはどれか。',choices:['閲覧後に実行しなかった利用者へ、理解・不安・必要性を確認するインタビューを行う','トップページの訪問者数だけを毎日確認する','機能紹介ページの文字数を数え、短いほどよいと判断する','開発チーム内で最も便利だと思う使い方を決める'],answer:0,explain:'ログで行動の場所は分かったが、理由は分からない。実行しなかった利用者に背景を確認することで、理解不足・不安・価値認識の課題を探れる。'},
  {id:'q16',type:'compare',area:'分析・要求定義',q:'「カスタマージャーニー」と「サービスブループリント」の違いとして最も適切なのはどれか。',choices:['前者は利用者の行動・感情・接点を中心に、後者は裏側の業務や仕組みも含めて整理する','前者は画面の配色、後者はロゴの使用ルールを整理する','前者は定量調査、後者は定性調査の名称である','前者は完成後評価、後者は開発言語の選定で使う'],answer:0,explain:'カスタマージャーニーは利用者視点の体験の流れ、サービスブループリントは顧客接点に加えて内部業務や支援プロセスも見る。'},
  {id:'q17',type:'case',area:'組織導入',q:'UXリサーチの結果、問い合わせの多くはサポート部門ではなく、申込前の説明不足が原因だと分かった。組織的な対応として最も適切なのはどれか。',choices:['調査結果を関係部門で共有し、申込前情報・営業説明・サポート対応を横断して見直す','サポート担当者の対応速度だけを評価指標にする','問い合わせ件数をサポート部門だけの責任として扱う','リサーチ結果はデザインチーム内だけで保管する'],answer:0,explain:'UXは複数部門の接点で形成される。原因が申込前にあるなら、部門横断で体験を見直す必要がある。'},
  {id:'q18',type:'case',area:'評価',q:'リリース後、問い合わせ数は減ったが、継続利用率は下がった。UX改善の評価として次に必要な見方はどれか。',choices:['問い合わせ削減だけでなく、継続利用や満足度など体験全体の指標も確認する','問い合わせ数が減ったので、他の指標は確認しない','継続利用率はUXではなく営業だけの指標として扱う','満足度は主観なので、評価から除外する'],answer:0,explain:'一つの指標だけではUX改善の成果を判断しにくい。問い合わせ削減と同時に、継続利用・満足・再利用意向なども見る。'}
];

const mockIds = ['q1','q2','q3','q4','q5','q6','q7','q8','q10','q11','q12','q13'];

function getState(){
  return JSON.parse(localStorage.getItem(VERSION)||'{"lesson":0,"done":[],"xp":0,"answers":{},"wrong":[],"mock":null}');
}
function setState(s){ localStorage.setItem(VERSION, JSON.stringify(s)); }
function reset(){ if(confirm('v0.9の進捗を初期化しますか？')){ localStorage.removeItem(VERSION); sessionStorage.clear(); location.href='index.html'; } }
function shuffle(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }
function pct(n,d){ return d?Math.round(n/d*100):0; }
function lessonById(id){ return lessons.find(l=>l.id===id); }
function chapterProgress(ch, s){ const done = ch.lessons.filter(id=>s.done.includes(lessons.findIndex(l=>l.id===id))).length; return {done,total:ch.lessons.length,pct:pct(done,ch.lessons.length)}; }
function currentChapter(s){ const l=lessons[Math.min(s.lesson,lessons.length-1)]; return chapters.find(c=>c.title===l.chapter) || chapters[0]; }
function answerStats(s){ const vals=Object.values(s.answers||{}); const answered=vals.length; const correct=vals.filter(v=>v.lastCorrect).length; const totalAttempts=vals.reduce((a,v)=>a+(v.attempts||0),0); const correctAttempts=vals.reduce((a,v)=>a+(v.correct||0),0); return {answered,correct,totalAttempts,correctAttempts,accuracy:pct(correct,answered)}; }
function passRate(s){ const st=answerStats(s); const lessonScore=pct(s.done.length,lessons.length); const acc=st.answered?st.accuracy:45; return Math.max(5, Math.min(95, Math.round(acc*0.65 + lessonScore*0.35))); }
function nav(active){ return `<div class="nav"><div class="nav-inner">${[['index.html','ホーム','🏠'],['study.html','学習','📖'],['quiz.html','問題','✍️'],['mock.html','模試','📝'],['profile.html','記録','👤']].map(n=>`<a class="${active==n[1]?'active':''}" href="${n[0]}">${n[2]}<br>${n[1]}</a>`).join('')}</div></div>`; }
function header(){ let s=getState(), ch=currentChapter(s); return `<div class="top"><div><div class="brand">UXPASS</div><div class="small">${ch.title} を学習中</div></div><span class="pill">合格予測 ${passRate(s)}%</span></div>`; }
function showToast(t){ let el=document.createElement('div'); el.className='toast'; el.textContent=t; document.body.appendChild(el); setTimeout(()=>el.classList.add('show'),10); setTimeout(()=>el.remove(),1800); }
function openTerm(term){ const d=termDict[term]; if(!d){ showToast(`${term}：用語カード準備中`); return; } const html=`<div class="modal-back" onclick="closeModal(event)"><div class="modal" onclick="event.stopPropagation()"><button class="modal-close" onclick="document.querySelector('.modal-back').remove()">×</button><div class="small">用語カード</div><h2>${d.title}</h2><p class="content">${d.desc}</p>${d.compare?`<div class="explain"><b>比較ポイント</b><br>${d.compare}</div>`:''}<div>${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></div>`; document.body.insertAdjacentHTML('beforeend', html); }
function closeModal(e){ if(e.target.classList.contains('modal-back')) e.currentTarget.remove(); }
function highlight(text, terms){ let out=text.replace(/\n/g,'<br>'); terms.forEach(t=>{ out=out.replaceAll(t,`<button class="term" onclick="openTerm('${t}')">${t}</button>`); }); return out; }
function studyQuestionsForLesson(l){ return questions.filter(q=> q.area===l.chapter || l.terms.some(t=>q.q.includes(t)||q.explain.includes(t))).slice(0,5); }
function recordAnswer(q, correct){ let s=getState(); s.answers=s.answers||{}; const a=s.answers[q.id] || {attempts:0,correct:0,lastCorrect:false,area:q.area}; a.attempts += 1; if(correct) a.correct += 1; a.lastCorrect = !!correct; a.area = q.area; s.answers[q.id] = a; if(!correct && !s.wrong.includes(q.id)) s.wrong.push(q.id); if(correct) s.xp += 5; setState(s); }

function renderHome(){
  let s=getState(); const l=lessons[Math.min(s.lesson,lessons.length-1)]; const ch=currentChapter(s); const cp=chapterProgress(ch,s); const overall=pct(s.done.length,lessons.length); const st=answerStats(s);
  document.body.innerHTML=`<main class="app">${header()}
  <section class="hero"><div class="small">次の一歩</div><h1>今日はここから。</h1><p class="sub">${ch.title}：${l.title}<br>約${l.minutes+8}分。迷ったらこのボタンだけでOK。</p><button class="btn" onclick="location.href='study.html'">▶ 続きから学習</button></section>
  <section class="card"><div class="section-head"><b>学習ロードマップ</b><span class="small">全${chapters.length}章 / ${lessons.length}レッスン</span></div>${chapters.map(c=>{const p=chapterProgress(c,s); return `<div class="road-row ${c.id===ch.id?'now':''}"><div><b>${c.title}</b><p>${c.goal}</p></div><span>${p.done}/${p.total}</span></div><div class="mini-meter"><div style="width:${p.pct}%"></div></div>`}).join('')}</section>
  <section class="grid"><a class="mini" href="quiz.html"><b>${st.accuracy || '-'}%</b><span class="small">直近正答率</span></a><a class="mini" href="profile.html"><b>${overall}%</b><span class="small">全体進捗</span></a><a class="mini" href="review.html"><b>${s.wrong.length}</b><span class="small">復習待ち</span></a><a class="mini" href="mock.html"><b>β</b><span class="small">ミニ模試</span></a></section>
  <section class="card soft"><b>初回理解度テスト</b><p class="content">今後、最初に弱点を測って進め方を変える機能を入れる予定。現段階ではミニ模試で代用できます。</p><button class="btn secondary" onclick="location.href='mock.html'">ミニ模試へ</button></section>
  <button class="btn ghost" onclick="reset()">進捗を初期化</button></main>${nav('ホーム')}`;
}

function renderStudy(){
  const s=getState(); const idx=Math.min(s.lesson,lessons.length-1); const l=lessons[idx]; const ch=chapters.find(c=>c.title===l.chapter); const cp=chapterProgress(ch,s); const qs=studyQuestionsForLesson(l);
  document.body.innerHTML=`<main class="app">${header()}
  <section class="card"><div class="small">${l.chapter} / ${idx+1} of ${lessons.length}</div><h1 class="lesson-title">${l.title}</h1><div class="meter"><div class="bar" style="width:${pct(idx,lessons.length)}%"></div></div><div class="map-note"><b>この章の位置づけ</b><br>${ch.goal}<br><span>章内進捗 ${cp.done}/${cp.total}</span></div><p class="content lead">${l.intro}</p><p class="content">${highlight(l.body,l.terms)}</p><div>${l.terms.map(t=>`<button class="tag tagbtn" onclick="openTerm('${t}')">${t}</button>`).join('')}</div></section>
  <section class="card"><div class="section-title" style="margin-top:0">このレッスンの理解チェック</div><p class="content">読んだ内容をケース問題で確認します。問題画面に移動しても、学習済みとして記録されます。</p><button class="btn" onclick="startLessonQuiz(${idx})">確認問題へ</button></section>
  <button class="btn secondary" onclick="completeLesson()">問題はあとで、次のレッスンへ</button></main>${nav('学習')}`;
}
function startLessonQuiz(idx){ let s=getState(); if(!s.done.includes(idx)) s.done.push(idx); setState(s); sessionStorage.setItem('lessonQuizIdx', idx); sessionStorage.setItem('lessonQuizStep','0'); location.href=`quiz.html?lesson=${idx}`; }
function completeLesson(){ let s=getState(); if(!s.done.includes(s.lesson)) s.done.push(s.lesson); s.lesson=Math.min(s.lesson+1,lessons.length-1); s.xp+=10; setState(s); location.href='study.html'; }

function getQuizPool(){
  const params=new URLSearchParams(location.search);
  if(params.get('mode')==='mock') return mockIds.map(id=>questions.find(q=>q.id===id)).filter(Boolean);
  if(params.get('lesson')!==null){ const l=lessons[Number(params.get('lesson'))]; const pool=studyQuestionsForLesson(l); return pool.length?pool:questions; }
  return questions;
}
function renderQuiz(){
  const params=new URLSearchParams(location.search); const mode=params.get('mode'); const lesson=params.get('lesson'); const pool=getQuizPool();
  let key= mode==='mock' ? 'mockQidx' : lesson!==null ? `lessonQidx_${lesson}` : 'freeQidx';
  let qi=Number(sessionStorage.getItem(key)||0);
  if(mode==='mock' && qi>=pool.length) return renderMockResult();
  qi=qi%pool.length; const q=pool[qi]; const order=shuffle(q.choices.map((c,i)=>({c,i}))); window.currentQ=q; window.quizKey=key;
  document.body.innerHTML=`<main class="app">${header()}<section class="card"><div class="small">${mode==='mock'?'ミニ模試':lesson!==null?'レッスン確認':'問題演習'} / ${q.area} / ${q.type}</div><h1 class="lesson-title">Q${qi+1}${mode==='mock'?` / ${pool.length}`:''}</h1><p class="content question-text">${q.q}</p><div id="opts">${order.map(o=>`<button class="quiz-option" onclick="answer(${o.i},this)">${o.c}</button>`).join('')}</div><div id="result"></div></section><button class="btn secondary" onclick="nextQ()">次の問題</button></main>${nav('問題')}`;
}
function answer(i,btn){ const q=window.currentQ; const correct=i===q.answer; document.querySelectorAll('.quiz-option').forEach(b=>b.disabled=true); btn.classList.add(correct?'correct':'wrong'); recordAnswer(q,correct); document.getElementById('result').innerHTML=`<div class="explain"><b>${correct?'正解。':'惜しい。'}</b><br>${q.explain}<br><br><b>正答</b><br>${q.choices[q.answer]}</div>`; }
function nextQ(){ const key=window.quizKey||'freeQidx'; sessionStorage.setItem(key,Number(sessionStorage.getItem(key)||0)+1); const params=new URLSearchParams(location.search); if(params.get('mode')==='mock') location.href='quiz.html?mode=mock'; else if(params.get('lesson')!==null){ const n=Number(sessionStorage.getItem(key)||0); if(n>=3){ let s=getState(); const li=Number(params.get('lesson')); s.lesson=Math.max(s.lesson, Math.min(li+1, lessons.length-1)); setState(s); location.href='study.html'; } else location.href=`quiz.html?lesson=${params.get('lesson')}`; } else location.href='quiz.html'; }

function renderMock(){ sessionStorage.removeItem('mockQidx'); document.body.innerHTML=`<main class="app">${header()}<section class="hero"><h1>ミニ模試 β</h1><p class="sub">まずは12問。UX概論・HCD・リサーチ・分析・評価を横断して、本番っぽいケース判断を確認します。</p><button class="btn" onclick="sessionStorage.setItem('mockQidx','0');location.href='quiz.html?mode=mock'">開始する</button></section><section class="card"><b>注意</b><p class="content">まだ100問模試ではありません。今は「問題品質の基準作り」が目的です。</p></section></main>${nav('模試')}`; }
function renderMockResult(){ const s=getState(); const st=answerStats(s); document.body.innerHTML=`<main class="app">${header()}<section class="hero"><h1>ミニ模試終了</h1><p class="sub">現在の合格予測：${passRate(s)}%<br>直近の正答率：${st.accuracy || 0}%</p><button class="btn" onclick="sessionStorage.removeItem('mockQidx');location.href='mock.html'">もう一度</button></section><section class="card"><b>次に見るところ</b><p class="content">間違えた分野は記録画面と復習画面に反映されます。</p></section></main>${nav('模試')}`; }

function renderReview(){ const s=getState(); const wrongIds=s.wrong.slice(-12).reverse(); document.body.innerHTML=`<main class="app">${header()}<section class="hero"><h1>復習</h1><p class="sub">間違えた問題を見直します。今後、翌日・3日後・7日後の復習タイミングを追加予定。</p></section><section class="list">${wrongIds.map(id=>{const q=questions.find(x=>x.id===id); return q?`<div class="row"><span>${q.area}</span><b>${q.q}</b></div>`:''}).join('')||'<div class="card">まだ復習対象はありません。</div>'}</section></main>${nav('復習')}`; }
function renderSearch(){ document.body.innerHTML=`<main class="app">${header()}<section class="hero"><h1>比較カード</h1><p class="sub">UX検定で混同しやすい概念を左右で整理。</p></section>${comparisons.map(c=>`<section class="card"><div class="compare"><div class="box"><b>${c.a}</b><p>${c.left}</p></div><div class="box"><b>${c.b}</b><p>${c.right}</p></div></div></section>`).join('')}</main>${nav('探す')}`; }
function renderProfile(){ const s=getState(); const st=answerStats(s); const byArea={}; Object.entries(s.answers||{}).forEach(([id,a])=>{ byArea[a.area]=byArea[a.area]||{n:0,c:0}; byArea[a.area].n++; if(a.lastCorrect) byArea[a.area].c++; }); const weak=Object.entries(byArea).map(([area,v])=>({area,rate:pct(v.c,v.n),n:v.n})).sort((a,b)=>a.rate-b.rate).slice(0,3); document.body.innerHTML=`<main class="app">${header()}<section class="hero"><h1>記録</h1><p class="sub">完了 ${s.done.length}/${lessons.length} レッスン<br>直近正答率 ${st.accuracy||0}% / 回答済み ${st.answered}問</p><div class="meter"><div class="bar" style="width:${pct(s.done.length,lessons.length)}%"></div></div></section><section class="grid"><div class="mini"><b>${passRate(s)}%</b><span class="small">合格予測</span></div><div class="mini"><b>${s.wrong.length}</b><span class="small">復習待ち</span></div><div class="mini"><b>${st.totalAttempts}</b><span class="small">総回答数</span></div><div class="mini"><b>${s.xp}</b><span class="small">XP</span></div></section><section class="card"><b>苦手候補</b>${weak.length?weak.map(w=>`<div class="row"><span>${w.area}</span><b>${w.rate}%</b></div>`).join(''):'<p class="content">まだ問題数が少ないため、もう少し解くと表示されます。</p>'}</section><button class="btn ghost" onclick="reset()">進捗を初期化</button></main>${nav('記録')}`; }
