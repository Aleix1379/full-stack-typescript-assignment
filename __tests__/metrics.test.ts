import { parsePostsToMetrics } from '../services/metrics'

const posts = [
  {
    id: 'post63a43b1574523_35391fb9',
    from_name: 'Yolande Urrutia',
    from_id: 'user_15',
    message:
      'crossing begin feminine wagon poor environmental forget insert torture franchise pavement integrity bill pain critic foreigner snow air queen hike contraction referee forget reward nationalist stunning follow strength wood revoke porter access lodge ethics population run menu museum member talkative prescription tie good role leave accident south pain indication rear shop lighter lend danger combine',
    type: 'status',
    created_time: '2022-12-22T06:10:28+00:00',
  },
  {
    id: 'post63a43b157453b_bd8e4737',
    from_name: 'Lashanda Small',
    from_id: 'user_12',
    message: 'vessel default fill tap computing trick.',
    type: 'status',
    created_time: '2022-12-22T02:58:37+00:00',
  },
  {
    id: 'post63a43b1574545_fea4c55b',
    from_name: 'Carson Smithson',
    from_id: 'user_5',
    message:
      'circulation broken carbon location seed border hate bend unfair desert excavation book veil host write convince stress alcohol education abbey interference establish popular trick litigation formal epicalyx deposit describe drama hole rhythm vertical turkey pursuit line chest product grudge height building braid definite sister damage shaft cave critic line admit agriculture population view symbol date reinforce policeman agriculture think',
    type: 'status',
    created_time: '2022-12-21T21:29:09+00:00',
  },
  {
    id: 'post63a43b1574551_83898192',
    from_name: 'Macie Mckamey',
    from_id: 'user_11',
    message: 'traction coincide hotdog ton charm brake treaty oak control palm',
    type: 'status',
    created_time: '2022-12-21T15:41:16+00:00',
  },
  {
    id: 'post63a43b157453b_bd8e4737',
    from_name: 'Lashanda Small',
    from_id: 'user_12',
    message: 'vessel default fill tap computing trick.',
    type: 'status',
    created_time: '2022-12-21T03:38:37+00:00',
  },
  {
    id: 'post63a43b1574554_af29c2cc',
    from_name: 'Rosann Eide',
    from_id: 'user_9',
    message:
      'admiration indication landowner golf curl rare heal skeleton charter useful shorts scandal lamb graphic soap morning precede abstract introduction wake circulation seller soap approval conservative stand nationalist deficiency sister director crude expose radio network plaster fabricate disaster awful contract indulge litigation money fireplace race important porter triangle wrist rehearsal torture describe meadow deficiency hour trade bill money fan makeup fling integration question discrimination gain brave conflict situation manage compact hole friend reputation belong foreigner visible Europe aspect home painter coach pour survey advance oak refuse pressure awful lend tribe raid shell west border level discount',
    type: 'status',
    created_time: '2022-12-21T12:14:05+00:00',
  },
  {
    id: 'post63a43b157453b_bd8e4737',
    from_name: 'Lashanda Small',
    from_id: 'user_12',
    message:
      'vessel default fill tap computing trick surround safety air photocopy camp extinct mother glove village urine bishop pot company kinship loan awful castle safety snub breast tile flat mayor snow interest return',
    type: 'status',
    created_time: '2022-11-21T03:38:37+00:00',
  },
]

describe('Metrics', () => {
  it('Test parse posts to metrics', async () => {
    const metrics = parsePostsToMetrics(posts)
    expect(metrics).toEqual({
      user_15: {
        userId: 'user_15',
        userName: 'Yolande Urrutia',
        totalPosts: 1,
        totalByMonth: {
          '12': 1,
        },
        longestPost: 402,
        median: 0,
      },
      user_12: {
        userId: 'user_12',
        userName: 'Lashanda Small',
        totalPosts: 3,
        totalByMonth: {
          '12': 2,
          '11': 1,
        },
        longestPost: 210,
        median: 40,
      },
      user_5: {
        userId: 'user_5',
        userName: 'Carson Smithson',
        totalPosts: 1,
        totalByMonth: {
          '12': 1,
        },
        longestPost: 443,
        median: 0,
      },
      user_11: {
        userId: 'user_11',
        userName: 'Macie Mckamey',
        totalPosts: 1,
        totalByMonth: {
          '12': 1,
        },
        longestPost: 64,
        median: 0,
      },
      user_9: {
        userId: 'user_9',
        userName: 'Rosann Eide',
        totalPosts: 1,
        totalByMonth: {
          '12': 1,
        },
        longestPost: 724,
        median: 0,
      },
    })
  })
})
