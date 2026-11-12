/* mock_H4_1.js — HSK（四级）真题 · 试卷二（2018版，孔子学院总部/国家汉办编制）
 * 数据来源：试卷二.pdf（扫描版逐页转录）+ 试卷二文本和答案.pdf（答案页核对）
 * 听力录音：HSK4-2.mp3（请与本文件一起上传到仓库根目录，约 29MB）
 * window.HSK_MOCK_DATA 契约：{level, paperId, title, durationMin, audio, questions[]}
 * 题型：true_false（听力一）/ single_choice（听力二三、阅读一三）/ text_input+auto_char（阅读二排序）/ text_input+manual（书写） */
window.HSK_MOCK_DATA = {
  level: "HSK4",
  paperId: "H4_1",
  title: "HSK（四级）真题 · 试卷二（2018版）",
  durationMin: 105,
  audio: "HSK4-2.mp3",
  questions: [

  /* ================= 一、听力 第一部分（1-10 判断对错） ================= */
  { id: 1, type: "true_false", section: "听力", part: "第一部分", instruction: "第1-10题：判断对错。", statement: "香蕉不能吃了。", answer: false, gradeMode: "auto" },
  { id: 2, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "女朋友也许会迟到。", answer: true, gradeMode: "auto" },
  { id: 3, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "小西不会说汉语。", answer: false, gradeMode: "auto" },
  { id: 4, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "说话人之前很马虎。", answer: true, gradeMode: "auto" },
  { id: 5, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "用筷子敲碗没有礼貌。", answer: true, gradeMode: "auto" },
  { id: 6, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "小李不清楚活动安排。", answer: false, gradeMode: "auto" },
  { id: 7, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "去长白山看雪景的人很多。", answer: true, gradeMode: "auto" },
  { id: 8, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "他的收入很高。", answer: false, gradeMode: "auto" },
  { id: 9, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "那两个词的用法完全相同。", answer: false, gradeMode: "auto" },
  { id: 10, type: "true_false", section: "听力", part: "第一部分", instruction: "判断对错。", statement: "别把工作烦恼带回家。", answer: true, gradeMode: "auto" },

  /* ================= 一、听力 第二部分（11-25） ================= */
  { id: 11, type: "single_choice", section: "听力", part: "第二部分", instruction: "第11-25题：请听录音，选出正确答案。", body: "请听录音作答。", options: ["勺子", "信封", "奖金", "零钱"], answer: "D", gradeMode: "auto" },
  { id: 12, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["有趣", "无聊", "很正式", "让人失望"], answer: "A", gradeMode: "auto" },
  { id: 13, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["饼干", "蛋糕", "包子", "面条儿"], answer: "D", gradeMode: "auto" },
  { id: 14, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["要加班", "想请假", "很轻松", "饿死了"], answer: "A", gradeMode: "auto" },
  { id: 15, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["教育", "感情", "科学技术", "社会问题"], answer: "D", gradeMode: "auto" },
  { id: 16, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["手机", "电脑", "照相机", "笔记本"], answer: "A", gradeMode: "auto" },
  { id: 17, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["还伞", "拿材料", "发传真", "复印表格"], answer: "B", gradeMode: "auto" },
  { id: 18, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["很懒", "很厉害", "不够勇敢", "很有自信"], answer: "B", gradeMode: "auto" },
  { id: 19, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["网址", "网速", "打开方式", "网站管理"], answer: "A", gradeMode: "auto" },
  { id: 20, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["多云", "刮风了", "下雨了", "出太阳了"], answer: "C", gradeMode: "auto" },
  { id: 21, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["邮局", "教室", "图书馆", "卫生间"], answer: "C", gradeMode: "auto" },
  { id: 22, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["很伤心", "要去打针", "最近没抽烟", "在检查身体"], answer: "C", gradeMode: "auto" },
  { id: 23, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["签证", "招聘结果", "电子邮件", "普通话成绩"], answer: "B", gradeMode: "auto" },
  { id: 24, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["银行", "商店", "宾馆", "饭店"], answer: "D", gradeMode: "auto" },
  { id: 25, type: "single_choice", section: "听力", part: "第二部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["报纸", "杂志", "电影", "名字"], answer: "B", gradeMode: "auto" },

  /* ================= 一、听力 第三部分（26-45） ================= */
  { id: 26, type: "single_choice", section: "听力", part: "第三部分", instruction: "第26-45题：请听录音，选出正确答案。", body: "请听录音作答。", options: ["保护环境", "少喝啤酒", "禁止用火", "关爱动植物"], answer: "A", gradeMode: "auto" },
  { id: 27, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["在减肥", "吃饱了", "太咸了", "味道不好"], answer: "A", gradeMode: "auto" },
  { id: 28, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["留学", "开会", "举办音乐会", "研究外国文化"], answer: "B", gradeMode: "auto" },
  { id: 29, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["复习", "去郊区", "翻译书", "去外省"], answer: "C", gradeMode: "auto" },
  { id: 30, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["游泳累的", "抬重物了", "昨天打球了", "钢琴弹久了"], answer: "C", gradeMode: "auto" },
  { id: 31, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["开车慢", "走错路了", "在选礼物", "女儿发烧了"], answer: "B", gradeMode: "auto" },
  { id: 32, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["没空儿买", "暂不需要", "妻子觉得贵", "儿子不同意买"], answer: "C", gradeMode: "auto" },
  { id: 33, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["洗澡", "购物", "扔垃圾", "整理行李"], answer: "D", gradeMode: "auto" },
  { id: 34, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["飞机上", "火车上", "街道上", "高速公路上"], answer: "A", gradeMode: "auto" },
  { id: 35, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["个子矮", "是个记者", "学过法律", "在使馆工作"], answer: "B", gradeMode: "auto" },
  { id: 36, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["找警察", "搬椅子", "抱住门", "关上窗户"], answer: "C", gradeMode: "auto" },
  { id: 37, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["力气大", "脾气差", "喝多了", "心情不好"], answer: "C", gradeMode: "auto" },
  { id: 38, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["道路安全", "没加油站", "修理汽车", "找停车的地方"], answer: "D", gradeMode: "auto" },
  { id: 39, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["坐地铁", "骑自行车", "提前出发", "好好打扮"], answer: "A", gradeMode: "auto" },
  { id: 40, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["更紧张", "被笑话", "影响印象", "得不到原谅"], answer: "C", gradeMode: "auto" },
  { id: 41, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["要准时", "要有耐心", "应聘的关键", "阅读的好处"], answer: "A", gradeMode: "auto" },
  { id: 42, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["安静", "景色好", "离公司近", "交通方便"], answer: "D", gradeMode: "auto" },
  { id: 43, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["调查表", "经济新闻", "艺术文章", "租房广告"], answer: "D", gradeMode: "auto" },
  { id: 44, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["很帅", "很友好", "很严格", "不怕危险"], answer: "C", gradeMode: "auto" },
  { id: 45, type: "single_choice", section: "听力", part: "第三部分", instruction: "请听录音，选出正确答案。", body: "请听录音作答。", options: ["要懂得拒绝", "成功需努力", "要有责任心", "要学会放弃"], answer: "B", gradeMode: "auto" },

  /* ================= 二、阅读 第一部分（46-55 选词填空） ================= */
  { id: 46, type: "single_choice", section: "阅读", part: "第一部分", instruction: "第46-50题：选词填空。", body: "原来你已经从南京回来了？一切都还（　）吧？", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["到底", "顺利", "诚实", "坚持", "周围", "质量"], answer: "B", gradeMode: "auto" },
  { id: 47, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "广播里说，周日的空气（　）很差，建议大家减少室外活动。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["到底", "顺利", "诚实", "坚持", "周围", "质量"], answer: "F", gradeMode: "auto" },
  { id: 48, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "黑板上的数字（　）是多少？你能看清吗？", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["到底", "顺利", "诚实", "坚持", "周围", "质量"], answer: "A", gradeMode: "auto" },
  { id: 49, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "我们都相信马师傅，他是一个（　）的人。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["到底", "顺利", "诚实", "坚持", "周围", "质量"], answer: "C", gradeMode: "auto" },
  { id: 50, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "我和我丈夫刚搬到这里不久，对（　）的环境还不太熟悉。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["到底", "顺利", "诚实", "坚持", "周围", "质量"], answer: "E", gradeMode: "auto" },
  { id: 51, type: "single_choice", section: "阅读", part: "第一部分", instruction: "第51-55题：选词填空。", body: "A：小丽好像有点儿不开心，你不该跟她开这样的（　）。 B：那我去给她道个歉吧。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["秒", "吸引", "温度", "玩笑", "随便", "趟"], answer: "D", gradeMode: "auto" },
  { id: 52, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "A：看你兴奋的样子，这次用了多久？ B：13（　），速度比上次提高了不少呢。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["秒", "吸引", "温度", "玩笑", "随便", "趟"], answer: "A", gradeMode: "auto" },
  { id: 53, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "A：你男朋友最（　）你的地方是什么？ B：他很幽默，而且性格很好。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["秒", "吸引", "温度", "玩笑", "随便", "趟"], answer: "B", gradeMode: "auto" },
  { id: 54, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "A：时间来得及吗？我想去（　）厕所，刚才矿泉水喝多了。 B：你去吧，我先去打印登机牌。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["秒", "吸引", "温度", "玩笑", "随便", "趟"], answer: "F", gradeMode: "auto" },
  { id: 55, type: "single_choice", section: "阅读", part: "第一部分", instruction: "选词填空。", body: "A：你有什么好主意吗？ B：这方面我不太懂，我不敢（　）说。", optionKeys: ["A", "B", "C", "D", "E", "F"], options: ["秒", "吸引", "温度", "玩笑", "随便", "趟"], answer: "E", gradeMode: "auto" },

  /* ================= 二、阅读 第二部分（56-65 排列顺序） ================= */
  { id: 56, type: "text_input", section: "阅读", part: "第二部分", instruction: "第56-65题：排列顺序（输入字母，如 BAC）。", body: "A 快擦擦，我去给你倒杯果汁 / B 对皮肤也不好，看你脸上的汗 / C 既然这么辣就别吃了", answer: "CBA", gradeMode: "auto_char" },
  { id: 57, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 只有按照一定的顺序排列这些号码 / B 否则很难看出来 / C 你才能发现它们之间的关系", answer: "ACB", gradeMode: "auto_char" },
  { id: 58, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 不但作者的意思理解起来有些困难 / B 这本小说写得不太好 / C 而且故事内容也不够精彩", answer: "BAC", gradeMode: "auto_char" },
  { id: 59, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 结果现在申请也来不及了 / B 但我还是忘记了 / C 昨天姐姐提醒我去报名参加篮球比赛", answer: "CBA", gradeMode: "auto_char" },
  { id: 60, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 观众在看电视剧时 / B 就能判断出他表演水平的高低 / C 往往通过演员一个很小的动作", answer: "ACB", gradeMode: "auto_char" },
  { id: 61, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 估计进去就得迷路 / B 你看这里 / C 环境太复杂了，我连入口都找不到", answer: "BCA", gradeMode: "auto_char" },
  { id: 62, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 我没有继续读硕士 / B 去年大学毕业以后 / C 而是回到老家，跟朋友一起做起了生意", answer: "BAC", gradeMode: "auto_char" },
  { id: 63, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 吃完饭都好好休息一下 / B 下午我们还有更重要的任务要完成 / C 各位辛苦了，我们为大家准备了午餐", answer: "CAB", gradeMode: "auto_char" },
  { id: 64, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 可是也没有表示反对 / B 她虽然十分吃惊 / C 我把这件事告诉妈妈时", answer: "CBA", gradeMode: "auto_char" },
  { id: 65, type: "text_input", section: "阅读", part: "第二部分", instruction: "排列顺序（输入字母，如 BAC）。", body: "A 这本词典你从哪儿买的 / B 甚至中间还缺了一页 / C 里面很多词语的解释都有错误", answer: "ACB", gradeMode: "auto_char" },

  /* ================= 二、阅读 第三部分（66-85） ================= */
  { id: 66, type: "single_choice", section: "阅读", part: "第三部分", instruction: "第66-85题：请选出正确答案。", body: "关校长办公室的电话不是没人接，就是占线，我真后悔没有存他的手机号。★说话人后悔：", options: ["没写地址", "打扰了别人", "没记住密码", "没存手机号"], answer: "D", gradeMode: "auto" },
  { id: 67, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "咱们新买的房子客厅和厨房都比较小，肯定放不下这么多家具，我们还是把这个小沙发和餐桌送人吧。★他们为什么要把家具送人？", options: ["太旧了", "新房小", "不流行了", "亲戚送了新的"], answer: "B", gradeMode: "auto" },
  { id: 68, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "尽管我们今天输了，但这并不能说明我们永远都在别人后面。只要我们认真练习，继续努力，下次赢的一定是我们，大家加油！★说话人在做什么？", options: ["批评人", "鼓励大家", "回忆过去", "讨论失败原因"], answer: "B", gradeMode: "auto" },
  { id: 69, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "真正的友谊并不是指经常见面、时时联系，而是互相都很了解。即使很久没见，见面之后仍然有许多话说；即使不常联系，但无论你遇到什么困难，他都会一直支持你、帮助你。★关于真正的友谊，可以知道什么？", options: ["经常聚会", "没有误会", "坚持联系", "互相支持"], answer: "D", gradeMode: "auto" },
  { id: 70, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "我之前去过很多地方，但从来没去过海边，所以我打算今年暑假去海南旅游，顺便放松一下。★他今年暑假要干什么？", options: ["爬长城", "去海洋馆", "去森林公园", "去海边玩儿"], answer: "D", gradeMode: "auto" },
  { id: 71, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "我有点儿困，先躺一会儿，你记得九点叫我。今晚有我最喜欢的足球队的比赛，要是错过就太可惜了。★他晚上准备做什么？", options: ["看球赛", "收拾房间", "打羽毛球", "看京剧表演"], answer: "A", gradeMode: "auto" },
  { id: 72, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "这次考试的填空题很容易，都是书上的内容，我只花了15分钟就做完了。但后面的问答题挺难的，其中有两个我实在答不出来，就空着交上去了。★上文主要谈的是：", options: ["考试题", "考试规定", "学期安排", "数学作业"], answer: "A", gradeMode: "auto" },
  { id: 73, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "前段时间特别冷，公园里都没什么人。这几天暖和了，散步的、跳舞的、运动的人也多了起来，公园又像以前一样热闹了。★公园为什么又变热闹了？", options: ["花儿开了", "天气热了", "污染轻了", "门票免费了"], answer: "B", gradeMode: "auto" },
  { id: 74, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "如果你讨厌一个人，很可能是因为你将重点放在了他的缺点上，而没看到他优秀的一面。其实，每个人身上都有值得别人学习的地方，不要因为「讨厌」而错过学习的机会。★上文告诉我们要怎么做？", options: ["学会感谢", "别害怕改变", "照顾好自己", "学习他人优点"], answer: "D", gradeMode: "auto" },
  { id: 75, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "小时候，我希望自己将来能做一个导游，这样我可以一边工作，一边到世界各地旅行。然而，我最后却选择了护士这个职业，因为我想帮助更多需要帮助的人。★她认为护士这个职业可以：", options: ["看病不排队", "让别人羡慕", "学更多知识", "帮助更多人"], answer: "D", gradeMode: "auto" },
  { id: 76, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "我们学校后面有一条小吃街，那里的东西不仅好吃，而且还便宜。平时没课时，同学们都爱去那儿逛逛。★那条小吃街的东西怎么样？", options: ["便宜", "新鲜", "卫生不合格", "不适合老人吃"], answer: "A", gradeMode: "auto" },
  { id: 77, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "李教授的突然出现让大家很激动。因为我们之前邀请他的时候，他还在北京出差，大家都以为他无法参加会议了，没想到他还是赶来了。★关于李教授，可以知道：", options: ["很年轻", "参加了会议", "提了很多意见", "去北京旅游了"], answer: "B", gradeMode: "auto" },
  { id: 78, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "现在很多人感觉自己还很年轻，光知道努力赚钱，却不注意身体健康。等老了，身体出了问题，再花钱看病。要知道，健康才是最重要的，千万不要「用身体赚钱，再用钱来买个好身体」。★根据上文，可以知道：", options: ["要有信心", "要按时吃药", "健康最重要", "钱能买到生命"], answer: "C", gradeMode: "auto" },
  { id: 79, type: "single_choice", section: "阅读", part: "第三部分", instruction: "请选出正确答案。", body: "在选择专业时，除了要为以后的发展做打算外，还要考虑自己的兴趣。如果选择了不喜欢的专业，即使上了大学，也很难学好。有句话说得好：兴趣才是最好的老师。★我们在选择专业时，应考虑：", options: ["家庭条件", "竞争压力", "父母的态度", "自己的兴趣"], answer: "D", gradeMode: "auto" },
  { id: 80, type: "single_choice", section: "阅读", part: "第三部分", instruction: "第80-81题是根据下面一段话。", body: "每个人都有理想，但并不是所有的理想都能成真。理想不能太空空，而应该符合实际。另外，理想也不能只停留在嘴上，必须积极去做，按照计划一步步地进行，并且在做的过程中及时总结经验，这样才能更准确地判断出前进的方向。★什么样的理想才能成真？", options: ["浪漫的", "有特点的", "受到表扬的", "符合实际的"], answer: "D", gradeMode: "auto" },
  { id: 81, type: "single_choice", section: "阅读", part: "第三部分", instruction: "根据上文作答。", body: "每个人都有理想，但并不是所有的理想都能成真。理想不能太空空，而应该符合实际。另外，理想也不能只停留在嘴上，必须积极去做，按照计划一步步地进行，并且在做的过程中及时总结经验，这样才能更准确地判断出前进的方向。★为了使理想成真，我们应该：", options: ["做事冷静", "多听建议", "积极去做", "养成好习惯"], answer: "C", gradeMode: "auto" },
  { id: 82, type: "single_choice", section: "阅读", part: "第三部分", instruction: "第82-83题是根据下面一段话。", body: "怎样才能买到价格便宜的机票呢？首先，买得越早越便宜。航班起飞前十天内，打折的机票就不会剩太多了。其次，星期一、星期二或节日后几天的机票会更便宜，因为这几天出行的人一般较少。最后，在互联网上购买机票也会节约不少钱。★根据上文，机票的价格跟什么有关？", options: ["季节", "买票时间", "降落时间", "想去的地方远近"], answer: "B", gradeMode: "auto" },
  { id: 83, type: "single_choice", section: "阅读", part: "第三部分", instruction: "根据上文作答。", body: "怎样才能买到价格便宜的机票呢？首先，买得越早越便宜。航班起飞前十天内，打折的机票就不会剩太多了。其次，星期一、星期二或节日后几天的机票会更便宜，因为这几天出行的人一般较少。最后，在互联网上购买机票也会节约不少钱。★网上购票的优点是什么？", options: ["花钱少", "过程简单", "可先选座位", "可推迟付款"], answer: "A", gradeMode: "auto" },
  { id: 84, type: "single_choice", section: "阅读", part: "第三部分", instruction: "第84-85题是根据下面一段话。", body: "我出生在「山城」重庆，长江经过这座美丽的城市。重庆既是山水之城，又是著名的「桥都」，全市共有4500多座桥，远远超过中国其他城市。桥对于重庆有着重要的作用，以前人们过江需要乘船，现在直接过桥就行了。可以说，桥大大方便了山城人的出行。★重庆为什么被叫作「桥都」？", options: ["桥身高", "桥的标准高", "桥的数量多", "有亚洲最长的桥"], answer: "C", gradeMode: "auto" },
  { id: 85, type: "single_choice", section: "阅读", part: "第三部分", instruction: "根据上文作答。", body: "我出生在「山城」重庆，长江经过这座美丽的城市。重庆既是山水之城，又是著名的「桥都」，全市共有4500多座桥，远远超过中国其他城市。桥对于重庆有着重要的作用，以前人们过江需要乘船，现在直接过桥就行了。可以说，桥大大方便了山城人的出行。★关于重庆，下列哪个正确？", options: ["很凉快", "很干净", "有山有水", "黄河经过那里"], answer: "C", gradeMode: "auto" },

  /* ================= 三、书写 第一部分（86-95 完成句子） ================= */
  { id: 86, type: "text_input", section: "书写", part: "第一部分", instruction: "第86-95题：完成句子（把所给词排成完整句子，写在横线上）。", body: "挂了　一张　客厅里　地图", answer: "客厅里挂了一张地图。", gradeMode: "manual" },
  { id: 87, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "我　信　了　寄出去　把", answer: "我把信寄出去了。", gradeMode: "manual" },
  { id: 88, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "你　考上了　祝贺　博士", answer: "祝贺你考上了博士。", gradeMode: "manual" },
  { id: 89, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "大约有　100棵　这里的　树", answer: "这里的树大约有100棵。", gradeMode: "manual" },
  { id: 90, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "有点儿　洗手间的　镜子　脏", answer: "洗手间的镜子有点儿脏。", gradeMode: "manual" },
  { id: 91, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "我　猜不出　实在　答案", answer: "我实在猜不出答案。／答案我实在猜不出。", gradeMode: "manual" },
  { id: 92, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "这份　很　写得　材料　详细", answer: "这份材料写得很详细。", gradeMode: "manual" },
  { id: 93, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "任何　没听到　你难道　响声　吗", answer: "你难道没听到任何响声吗？", gradeMode: "manual" },
  { id: 94, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "我　打个招呼　去向　张律师", answer: "我去向张律师打个招呼。", gradeMode: "manual" },
  { id: 95, type: "text_input", section: "书写", part: "第一部分", instruction: "完成句子。", body: "这双皮鞋的　比那双　颜色　稍微深　一些", answer: "这双皮鞋的颜色比那双稍微深一些。", gradeMode: "manual" },

  /* ================= 三、书写 第二部分（96-100 看图用词造句） ================= */
  { id: 96, type: "text_input", section: "书写", part: "第二部分", instruction: "第96-100题：看图，用词造句。", body: "【图】一位女士端着一盘汤　词：汤", answer: "尝尝我做的汤怎么样？", gradeMode: "manual" },
  { id: 97, type: "text_input", section: "书写", part: "第二部分", instruction: "看图，用词造句。", body: "【图】一位女士捂着脸颊（牙疼）　词：巧克力", answer: "她一吃巧克力就牙疼。", gradeMode: "manual" },
  { id: 98, type: "text_input", section: "书写", part: "第二部分", instruction: "看图，用词造句。", body: "【图】理发师正在给人理发　词：理发", answer: "弟弟正在理发呢。", gradeMode: "manual" },
  { id: 99, type: "text_input", section: "书写", part: "第二部分", instruction: "看图，用词造句。", body: "【图】一位男士拿着地图查看　词：迷路", answer: "他好像迷路了。", gradeMode: "manual" },
  { id: 100, type: "text_input", section: "书写", part: "第二部分", instruction: "看图，用词造句。", body: "【图】堆满杂物的房间　词：乱", answer: "你的房间真乱啊！", gradeMode: "manual" }

  ]
};
