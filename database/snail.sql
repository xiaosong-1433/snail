/*
Navicat MySQL Data Transfer

Source Server         : opensql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : snail

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-03-05 19:10:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexshuju`
-- ----------------------------
DROP TABLE IF EXISTS `indexshuju`;
CREATE TABLE `indexshuju` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `title` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `describe` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexshuju
-- ----------------------------
INSERT INTO `indexshuju` VALUES ('1', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1876322778,3744573451&fm=26&gp=0.jpg', '巨型霸王龙毛绒公仔(绿色/1.5m款)', '599', null);
INSERT INTO `indexshuju` VALUES ('2', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2356539720,3960995470&fm=26&gp=0.jpg', '九阴真经-神机营/高清原画海报', '29', null);
INSERT INTO `indexshuju` VALUES ('3', 'https://image.9game.cn/2017/2/23/16054944.jpg', '《黑暗与光明》2018纪念款', '98', null);
INSERT INTO `indexshuju` VALUES ('4', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1941598591,1912815681&fm=26&gp=0.jpg', '萌系霸王龙钥匙扣', '29', null);
INSERT INTO `indexshuju` VALUES ('5', 'http://att.snailmobile.com/snail-app/goods/20210318124916772.jpg', '逐月销金袍', '198', null);
INSERT INTO `indexshuju` VALUES ('6', 'http://att.snailmobile.com/snail-app/goods/20210409133443153.jpg', '百战血披•朱', '498', null);
INSERT INTO `indexshuju` VALUES ('7', 'http://att.snailmobile.com/snail-app/goods/20210318132714297.jpg', '四象双剑鞘', '1298', null);
INSERT INTO `indexshuju` VALUES ('8', 'http://att.snailmobile.com/snail-app/goods/20210318135150594.jpg', '四象剑鞘', '1298', null);
INSERT INTO `indexshuju` VALUES ('9', 'http://att1.woniu.com/mall.snail.com/shop/2018/0517/75a5cfcdabd920c684fb9d42bbc3f617.png', '蜗牛无限卡', '50', '畅享无限量 话费我更省');
INSERT INTO `indexshuju` VALUES ('10', 'http://att1.niucdn.com/shopmall.snail.com/2017/0216/70bbb8a7e7d9ec718b0901b13c48e8cf708c1bea.png', '蜗牛网红卡', '50', '燃爆40G流量 AAA号码入网免费送');
INSERT INTO `indexshuju` VALUES ('11', 'http://att1.niucdn.com/shopmall.snail.com/2017/0216/8f6e1c7735e0c471391f1ce2ae041c2b7e823505.png', '畅玩12免卡', '50', '低消2元，语音0.12-0.09元/分钟');
INSERT INTO `indexshuju` VALUES ('12', 'http://att1.niucdn.com/shopmall.snail.com/2017/0216/a118fb0fee68404e013ec960d0314d04d55321a9.png', '蜗牛神通卡', '50', '最高月享60GB+600分钟');
INSERT INTO `indexshuju` VALUES ('13', '//att1.woniu.com/shopmall.snail.com/2018/0209/a99c2fc286372f45ce19436b7d05847e10150e52.png', '马来西亚卡', '48', '7日2GB高速上网流量');
INSERT INTO `indexshuju` VALUES ('14', '//att1.woniu.com/mall.snail.com/shop/2020/0319/67e098ca36158a5d8343eb2110d0c515.png', '日本卡', '53', '7日无限上网流量');
INSERT INTO `indexshuju` VALUES ('15', '//att1.woniu.com/mall.snail.com/shop/2018/0830/6841bf32addcde5778484384a834db88.png', '美国卡', '85', '30日无限上网流量，无限通话');
INSERT INTO `indexshuju` VALUES ('16', '//att1.woniu.com/mall.snail.com/shop/2019/1205/8ff5cd6fbc8616f2fa83812988bf02cf.png', '韩国卡', '63', '7日2.2GB4G高速流量');
INSERT INTO `indexshuju` VALUES ('17', 'http://attachments.snail.com/snail-app/goods/20150818100704150.png', '百合', '1', null);
INSERT INTO `indexshuju` VALUES ('18', 'http://attachments.snail.com/snail-app/goods/20150803161630311.png', '爱の见证', '9.6', null);
INSERT INTO `indexshuju` VALUES ('19', 'http://attachments.snail.com/snail-app/goods/20150810105903219.png', '迷人舞娘衣嫩黄', '1.68', null);
INSERT INTO `indexshuju` VALUES ('20', 'http://attachments.snail.com/snail-app/goods/20150810105104108.png', '迷人舞娘裤嫩黄', '1.68', null);

-- ----------------------------
-- Table structure for `listdata`
-- ----------------------------
DROP TABLE IF EXISTS `listdata`;
CREATE TABLE `listdata` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listdata
-- ----------------------------
INSERT INTO `listdata` VALUES ('74', 'http://att.snailmobile.com/snail-app/goods/20210318115932266.jpg', '牛转乾坤', '298');
INSERT INTO `listdata` VALUES ('75', 'http://att.snailmobile.com/snail-app/goods/20210318131953954.png', '康宁丰乐', '49');
INSERT INTO `listdata` VALUES ('76', 'http://att.snailmobile.com/snail-app/goods/20210409133929399.jpg', '雀绒映月.朱', '498');
INSERT INTO `listdata` VALUES ('77', 'http://att.snailmobile.com/snail-app/goods/20210409133737918.jpg', '雀绒映月.紫', '498');
INSERT INTO `listdata` VALUES ('78', 'http://att.snailmobile.com/snail-app/goods/20210409133711577.jpg', '鹿锦醉花.紫', '498');
INSERT INTO `listdata` VALUES ('79', 'http://att.snailmobile.com/snail-app/goods/20210409133651159.jpg', '鹿锦醉花.朱', '498');
INSERT INTO `listdata` VALUES ('80', 'http://att.snailmobile.com/snail-app/goods/20210409133633446.jpg', '鹿锦醉花.玄', '498');
INSERT INTO `listdata` VALUES ('81', 'http://att.snailmobile.com/snail-app/goods/20210409133607242.jpg', '百战血披.青', '498');
INSERT INTO `listdata` VALUES ('82', 'http://att.snailmobile.com/snail-app/goods/20210409133443153.jpg', '百战血披.朱', '498');
INSERT INTO `listdata` VALUES ('83', 'http://att.snailmobile.com/snail-app/goods/20210409133411301.jpg', '百战血披.玄', '498');
INSERT INTO `listdata` VALUES ('84', 'http://att.snailmobile.com/snail-app/goods/20210409133340293.jpg', '游龙戏凤.朱', '498');
INSERT INTO `listdata` VALUES ('85', 'http://att.snailmobile.com/snail-app/goods/20210409133320486.jpg', '游龙戏凤.蓝', '498');
INSERT INTO `listdata` VALUES ('86', 'http://att.snailmobile.com/snail-app/goods/20210409133258238.jpg', '游龙戏凤.绯', '498');
INSERT INTO `listdata` VALUES ('87', 'http://att.snailmobile.com/snail-app/goods/20210409133217832.jpg', '游龙戏凤.玉', '498');
INSERT INTO `listdata` VALUES ('88', 'http://att.snailmobile.com/snail-app/goods/20210409133138616.jpg', '雀绒映月.蓝', '498');
INSERT INTO `listdata` VALUES ('89', 'http://att.snailmobile.com/snail-app/goods/20210409130445258.jpg', '破阵子·出塞', '498');
INSERT INTO `listdata` VALUES ('90', 'http://att.snailmobile.com/snail-app/goods/20210409130422759.jpg', '锦龙氅', '498');
INSERT INTO `listdata` VALUES ('91', 'http://att.snailmobile.com/snail-app/goods/20210409130403651.jpg', '鹤影霞鸾披', '498');
INSERT INTO `listdata` VALUES ('92', 'http://att.snailmobile.com/snail-app/goods/20210409114423495.jpg', '垂帘逐梦', '69');
INSERT INTO `listdata` VALUES ('93', 'http://att.snailmobile.com/snail-app/goods/20210409114248403.jpg', '雅逸情惬礼盒', '198');
INSERT INTO `listdata` VALUES ('94', 'http://att.snailmobile.com/snail-app/goods/20210409105140406.jpg', '室内家具礼盒一', '198');
INSERT INTO `listdata` VALUES ('95', 'http://att.snailmobile.com/snail-app/goods/20210409104816845.jpg', '室内家具礼盒二', '198');
INSERT INTO `listdata` VALUES ('96', 'http://att.snailmobile.com/snail-app/goods/20210409104627160.jpg', '中秋家具包', '498');
INSERT INTO `listdata` VALUES ('97', 'http://att.snailmobile.com/snail-app/goods/20210409093140839.jpg', '追云', '498');
INSERT INTO `listdata` VALUES ('98', 'http://att.snailmobile.com/snail-app/goods/20210409093007776.jpg', '追云·冥', '498');
INSERT INTO `listdata` VALUES ('99', 'http://att.snailmobile.com/snail-app/goods/20210409092820480.jpg', '追云·雅', '498');
INSERT INTO `listdata` VALUES ('100', 'http://att.snailmobile.com/snail-app/goods/20210409092544275.jpg', '追云·威', '498');
INSERT INTO `listdata` VALUES ('101', 'http://att.snailmobile.com/snail-app/goods/20210409092354693.jpg', '追云·清', '498');
INSERT INTO `listdata` VALUES ('102', 'http://att.snailmobile.com/snail-app/goods/20210409092227381.jpg', '齐天凤翎披·朱', '498');
INSERT INTO `listdata` VALUES ('103', 'http://att.snailmobile.com/snail-app/goods/20210409092129874.jpg', '齐天凤翎披·黄', '498');
INSERT INTO `listdata` VALUES ('104', 'http://att.snailmobile.com/snail-app/goods/20210409091935457.jpg', '齐天凤翎披·紫', '498');
INSERT INTO `listdata` VALUES ('105', 'http://att.snailmobile.com/snail-app/goods/20210409091809723.jpg', '齐天凤翎披·蓝', '498');
INSERT INTO `listdata` VALUES ('106', 'http://att.snailmobile.com/snail-app/goods/20210409091549348.jpg', '金领冰露披', '498');
INSERT INTO `listdata` VALUES ('107', 'http://att.snailmobile.com/snail-app/goods/20210409091310369.jpg', '星尘幻空披', '498');
INSERT INTO `listdata` VALUES ('108', 'http://att.snailmobile.com/snail-app/goods/20210408175854293.jpg', '薇云披风·蓝', '498');
INSERT INTO `listdata` VALUES ('109', 'http://att.snailmobile.com/snail-app/goods/20210408175655550.jpg', '薇云披风·黄', '498');
INSERT INTO `listdata` VALUES ('110', 'http://att.snailmobile.com/snail-app/goods/20210408175410895.jpg', '薇云披风·赤', '498');
INSERT INTO `listdata` VALUES ('111', 'http://att.snailmobile.com/snail-app/goods/20210408175245145.jpg', '百花朝凤', '498');
INSERT INTO `listdata` VALUES ('112', 'http://att.snailmobile.com/snail-app/goods/20210408174811531.jpg', '青云琉影披风', '498');
INSERT INTO `listdata` VALUES ('113', 'http://att.snailmobile.com/snail-app/goods/20210408174420129.jpg', '胭红暮雪披', '498');
INSERT INTO `listdata` VALUES ('114', 'http://att.snailmobile.com/snail-app/goods/20210408174131193.jpg', '朱羽绣玉披', '498');
INSERT INTO `listdata` VALUES ('115', 'http://att.snailmobile.com/snail-app/goods/20210408172750536.jpg', '绫岚紫羽披', '498');
INSERT INTO `listdata` VALUES ('116', 'http://att.snailmobile.com/snail-app/goods/20210408172523418.jpg', '幻影氅', '498');
INSERT INTO `listdata` VALUES ('117', 'http://att.snailmobile.com/snail-app/goods/20210408172307649.png', '耀世麟吟', '498');
INSERT INTO `listdata` VALUES ('118', 'http://att.snailmobile.com/snail-app/goods/20210408172127657.jpg', '花阡朵朵', '498');
INSERT INTO `listdata` VALUES ('119', 'http://att.snailmobile.com/snail-app/goods/20210408171813950.jpg', '秋水胧月', '498');
INSERT INTO `listdata` VALUES ('120', 'http://att.snailmobile.com/snail-app/goods/20210408171606119.jpg', '花醉三千', '498');
INSERT INTO `listdata` VALUES ('121', 'http://att.snailmobile.com/snail-app/goods/20210318114232163.jpg', '豹豹萌', '198');
INSERT INTO `listdata` VALUES ('122', 'http://att.snailmobile.com/snail-app/goods/20210318131725630.jpg', '幻氤鲤墨', '198');
INSERT INTO `listdata` VALUES ('123', 'http://att.snailmobile.com/snail-app/goods/20210322101632899.jpg', '黑白无常', '198');
INSERT INTO `listdata` VALUES ('124', 'http://att.snailmobile.com/snail-app/goods/20210322101613862.jpg', '绯云裳', '198');
INSERT INTO `listdata` VALUES ('125', 'http://att.snailmobile.com/snail-app/goods/20210322101556498.jpg', '胭脂马', '1298');
INSERT INTO `listdata` VALUES ('126', 'http://att.snailmobile.com/snail-app/goods/20210322101541167.jpg', '墨麟儿', '1298');
INSERT INTO `listdata` VALUES ('127', 'http://att.snailmobile.com/snail-app/goods/20210322101505416.jpg', '凌踪马', '1298');
INSERT INTO `listdata` VALUES ('128', 'http://att.snailmobile.com/snail-app/goods/20210322101453798.jpg', '小羿', '198');
INSERT INTO `listdata` VALUES ('129', 'http://att.snailmobile.com/snail-app/goods/20210322101439366.jpg', '萌萌', '198');
INSERT INTO `listdata` VALUES ('130', 'http://att.snailmobile.com/snail-app/goods/20210322101421343.jpg', '千忆扇', '1298');
INSERT INTO `listdata` VALUES ('131', 'http://att.snailmobile.com/snail-app/goods/20210322101407542.jpg', '出神入剑', '1298');
INSERT INTO `listdata` VALUES ('132', 'http://att.snailmobile.com/snail-app/goods/20210322101351702.jpg', '雁雪剑', '1298');
INSERT INTO `listdata` VALUES ('133', 'http://att.snailmobile.com/snail-app/goods/20210322101330631.jpg', '木雅纯风', '198');
INSERT INTO `listdata` VALUES ('134', 'http://att.snailmobile.com/snail-app/goods/20210322101315318.jpg', '华朝月夜衣', '198');
INSERT INTO `listdata` VALUES ('135', 'http://att.snailmobile.com/snail-app/goods/20210322101256936.jpg', '春融漫红', '198');
INSERT INTO `listdata` VALUES ('136', 'http://att.snailmobile.com/snail-app/goods/20210322101230315.jpg', '琼花玉胜', '198');
INSERT INTO `listdata` VALUES ('137', 'http://att.snailmobile.com/snail-app/goods/20210322101207361.jpg', '君梦徊思', '198');
INSERT INTO `listdata` VALUES ('138', 'http://att.snailmobile.com/snail-app/goods/20210322101149963.jpg', '蛟鳞衣', '198');
INSERT INTO `listdata` VALUES ('139', 'http://att.snailmobile.com/snail-app/goods/20210322101131258.jpg', '燕雨摇袂', '198');
INSERT INTO `listdata` VALUES ('140', 'http://att.snailmobile.com/snail-app/goods/20210322101043405.jpg', '圣谛梵音裳', '198');
INSERT INTO `listdata` VALUES ('141', 'http://att.snailmobile.com/snail-app/goods/20210318141038278.jpg', '未央飘羽扇鞘', '396');
INSERT INTO `listdata` VALUES ('142', 'http://att.snailmobile.com/snail-app/goods/20210318141015996.jpg', '炽金刀鞘', '198');
INSERT INTO `listdata` VALUES ('143', 'http://att.snailmobile.com/snail-app/goods/20210318131209203.jpg', '兰薰半锦', '198');
INSERT INTO `listdata` VALUES ('144', 'http://att.snailmobile.com/snail-app/goods/20210318131130968.jpg', '清秋望月裳', '198');
INSERT INTO `listdata` VALUES ('145', 'http://att.snailmobile.com/snail-app/goods/20210318131056653.jpg', '琼霄裳', '198');
INSERT INTO `listdata` VALUES ('146', 'http://att.snailmobile.com/snail-app/goods/20210318131012566.jpg', '柳花青拂裳', '198');
INSERT INTO `listdata` VALUES ('147', 'http://att.snailmobile.com/snail-app/goods/20210318130942510.jpg', '殷蕊灼华衫', '198');
INSERT INTO `listdata` VALUES ('148', 'http://att.snailmobile.com/snail-app/goods/20210318130911894.jpg', '星羽阑珊服', '198');
INSERT INTO `listdata` VALUES ('149', 'http://att.snailmobile.com/snail-app/goods/20210318130827620.jpg', '春晖映雪裘', '198');
INSERT INTO `listdata` VALUES ('150', 'http://att.snailmobile.com/snail-app/goods/20210318130754702.jpg', '流火未央套装', '198');
INSERT INTO `listdata` VALUES ('151', 'http://att.snailmobile.com/snail-app/goods/20210318120213293.jpg', '骆驼', '198');
INSERT INTO `listdata` VALUES ('152', 'http://att.snailmobile.com/snail-app/goods/20210318115959710.jpg', '青驴', '198');
INSERT INTO `listdata` VALUES ('153', 'http://att.snailmobile.com/snail-app/goods/20210318115904324.png', '登仙辇', '1298');
INSERT INTO `listdata` VALUES ('154', 'http://att.snailmobile.com/snail-app/goods/20210318115227769.png', '霜雪骓', '1298');
INSERT INTO `listdata` VALUES ('155', 'http://att.snailmobile.com/snail-app/goods/20210318115158544.jpg', '黑水仙', '1298');
INSERT INTO `listdata` VALUES ('156', 'http://att.snailmobile.com/snail-app/goods/20210318115126538.jpg', '狮子骢', '1298');
INSERT INTO `listdata` VALUES ('157', 'http://att.snailmobile.com/snail-app/goods/20210318115033723.jpg', '玉逍遥', '1298');
INSERT INTO `listdata` VALUES ('158', 'http://att.snailmobile.com/snail-app/goods/20210318114931812.jpg', '云竹轿', '1698');
INSERT INTO `listdata` VALUES ('159', 'http://att.snailmobile.com/snail-app/goods/20210318114900437.jpg', '玉光雪鹿', '3880');
INSERT INTO `listdata` VALUES ('160', 'http://att.snailmobile.com/snail-app/goods/20210318114818667.jpg', '羁侠鹿', '3880');
INSERT INTO `listdata` VALUES ('161', 'http://att.snailmobile.com/snail-app/goods/20210318114744228.jpg', '白龙驹', '3980');
INSERT INTO `listdata` VALUES ('162', 'http://att.snailmobile.com/snail-app/goods/20210318114618470.jpg', '鸣麟', '198');
INSERT INTO `listdata` VALUES ('163', 'http://att.snailmobile.com/snail-app/goods/20210318114552987.jpg', '咩咩', '198');
INSERT INTO `listdata` VALUES ('164', 'http://att.snailmobile.com/snail-app/goods/20210318114447806.jpg', '露露', '198');
INSERT INTO `listdata` VALUES ('165', 'http://att.snailmobile.com/snail-app/goods/20210318114421826.jpg', '锦毛鼠', '198');
INSERT INTO `listdata` VALUES ('166', 'http://att.snailmobile.com/snail-app/goods/20210318114352881.jpg', '果果', '198');
INSERT INTO `listdata` VALUES ('167', 'http://att.snailmobile.com/snail-app/goods/20210318114327927.jpg', '咕咕天团', '198');
INSERT INTO `listdata` VALUES ('168', 'http://att.snailmobile.com/snail-app/goods/20210318114257969.jpg', '冰雪露露', '198');
INSERT INTO `listdata` VALUES ('169', 'http://att.snailmobile.com/snail-app/goods/20210318114122997.jpg', '猫头鹰', '198');
INSERT INTO `listdata` VALUES ('170', 'http://att.snailmobile.com/snail-app/goods/20210318114052671.jpg', '白猫头鹰', '198');

-- ----------------------------
-- Table structure for `loginregistry`
-- ----------------------------
DROP TABLE IF EXISTS `loginregistry`;
CREATE TABLE `loginregistry` (
  `uid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT '',
  `idnumber` varchar(30) DEFAULT '',
  `phone` varchar(20) DEFAULT '',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loginregistry
-- ----------------------------
INSERT INTO `loginregistry` VALUES ('1', 'admin', '123456', '1', '16677676');
INSERT INTO `loginregistry` VALUES ('77', 'zzzz', 'Zs123?', '52252719981225253X', '15158306411');
INSERT INTO `loginregistry` VALUES ('78', 'dsjaljl', 'Zs123?', '52252719981225253X', '15158306411');

-- ----------------------------
-- Table structure for `orderlist`
-- ----------------------------
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `username` varchar(200) DEFAULT '',
  `title` varchar(255) DEFAULT NULL,
  `quantity` tinyint(3) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderlist
-- ----------------------------
INSERT INTO `orderlist` VALUES ('21', 'http://att.snailmobile.com/snail-app/goods/20210318131953954.png', 'zz', '康宁丰乐', '2');
INSERT INTO `orderlist` VALUES ('22', 'http://att.snailmobile.com/snail-app/goods/20210409130422759.jpg', 'zzzz', '锦龙氅', '6');
