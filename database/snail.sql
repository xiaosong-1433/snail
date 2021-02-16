/*
Navicat MySQL Data Transfer

Source Server         : opensql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : snail

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-19 09:13:27
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
INSERT INTO `indexshuju` VALUES ('1', 'http://attachments.snail.com/snail-app/goods/20181113154620491.jpg', '巨型霸王龙毛绒公仔(绿色/1.5m款)', '599', null);
INSERT INTO `indexshuju` VALUES ('2', 'http://attachments.snail.com/snail-app/goods/20181119183053507.jpg', '九阴真经-神机营/高清原画海报', '29', null);
INSERT INTO `indexshuju` VALUES ('3', 'http://attachments.snail.com/snail-app/goods/20181113160253693.jpg', '《黑暗与光明》2018纪念款T恤', '98', null);
INSERT INTO `indexshuju` VALUES ('4', 'http://attachments.snail.com/snail-app/goods/20181113135226348.jpg', '萌系霸王龙钥匙扣', '29', null);
INSERT INTO `indexshuju` VALUES ('5', 'http://attachments.snail.com/snail-app/goods/20150107193542342.jpg', '逐月销金袍', '198', null);
INSERT INTO `indexshuju` VALUES ('6', 'http://attachments.snail.com/snail-app/goods/20200311155554528.jpg', '百战血披•朱', '498', null);
INSERT INTO `indexshuju` VALUES ('7', 'http://attachments.snail.com/snail-app/goods/20150513145223584.jpg', '四象双剑鞘', '1298', null);
INSERT INTO `indexshuju` VALUES ('8', 'http://attachments.snail.com/snail-app/goods/20150514080412850.jpg', '四象剑鞘', '1298', null);
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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listdata
-- ----------------------------
INSERT INTO `listdata` VALUES ('5', 'http://attachments.snail.com/snail-app/goods/20150107193542342.jpg', '逐月销金袍', '198');
INSERT INTO `listdata` VALUES ('6', 'http://attachments.snail.com/snail-app/goods/20200311155554528.jpg', '百战血披•朱', '498');
INSERT INTO `listdata` VALUES ('7', 'http://attachments.snail.com/snail-app/goods/20150513145223584.jpg', '四象双剑鞘', '1298');
INSERT INTO `listdata` VALUES ('8', 'http://attachments.snail.com/snail-app/goods/20150514080412850.jpg', '四象剑鞘', '1298');
INSERT INTO `listdata` VALUES ('17', 'http://attachments.snail.com/snail-app/goods/20190410174644164.jpg', '豹豹萌', '198');
INSERT INTO `listdata` VALUES ('18', 'http://attachments.snail.com/snail-app/goods/20160804095800605.jpg', '“果果”礼花', '98');
INSERT INTO `listdata` VALUES ('19', 'http://attachments.snail.com/snail-app/goods/20200925151237312.jpg', '锦毛鼠', '168');
INSERT INTO `listdata` VALUES ('20', 'http://attachments.snail.com/snail-app/goods/20150901181951403.jpg', '“鸣麟”礼花', '298');
INSERT INTO `listdata` VALUES ('21', 'http://attachments.snail.com/snail-app/goods/20160114134915762.jpg', '“白龙驹”礼花', '3998');
INSERT INTO `listdata` VALUES ('22', 'http://attachments.snail.com/snail-app/goods/20171221133309905.jpg', '雪鹿', '3888');
INSERT INTO `listdata` VALUES ('23', 'http://attachments.snail.com/snail-app/goods/20160804095846458.jpg', '云竹轿', '1698');
INSERT INTO `listdata` VALUES ('24', 'http://attachments.snail.com/snail-app/goods/20180205202937972.jpg', '“金蛟啸日刀”礼花', '1298');
INSERT INTO `listdata` VALUES ('25', 'http://attachments.snail.com/snail-app/goods/20150520133154716.jpg', '胭脂马', '652');
INSERT INTO `listdata` VALUES ('26', 'http://attachments.snail.com/snail-app/goods/20200311154220364.jpg', '千忆扇', '1298');
INSERT INTO `listdata` VALUES ('27', 'http://attachments.snail.com/snail-app/goods/20200312113346724.jpg', '盘龙腾焰弓', '658');
INSERT INTO `listdata` VALUES ('28', 'http://attachments.snail.com/snail-app/goods/20151109155620378.png', '霜雪骓', '1298');
INSERT INTO `listdata` VALUES ('29', 'http://attachments.snail.com/snail-app/goods/20180605210146853.jpg', '玉逍遥', '1250');
INSERT INTO `listdata` VALUES ('30', 'http://attachments.snail.com/snail-app/goods/20160622143917902.jpg', '吞金雪玉刀', '600');
INSERT INTO `listdata` VALUES ('31', 'http://attachments.snail.com/snail-app/goods/20191217173830776.jpg', '雁雪剑', '1298');
INSERT INTO `listdata` VALUES ('32', 'http://attachments.snail.com/snail-app/goods/20151126134844310.png', '王命金锏', '354');
INSERT INTO `listdata` VALUES ('33', 'http://attachments.snail.com/snail-app/goods/20180815101705392.gif', '“梅中剑”礼花', '1298');
INSERT INTO `listdata` VALUES ('34', 'http://attachments.snail.com/snail-app/goods/20200113172925868.jpg', '凌踪马', '1300');
INSERT INTO `listdata` VALUES ('35', 'http://attachments.snail.com/snail-app/goods/20151216182952951.png', '断罪魔刀礼花', '456');
INSERT INTO `listdata` VALUES ('36', 'http://attachments.snail.com/snail-app/goods/20150107194039321.jpg', '狮子骢', '1298');
INSERT INTO `listdata` VALUES ('37', 'http://attachments.snail.com/snail-app/goods/20200427105122347.jpg', '出神入剑', '300');
INSERT INTO `listdata` VALUES ('38', 'http://attachments.snail.com/snail-app/goods/20160114141230368.jpg', '十方双剑鞘', '1298');
INSERT INTO `listdata` VALUES ('39', 'http://attachments.snail.com/snail-app/goods/20150128095907714.jpg', '墨麟儿', '1298');
INSERT INTO `listdata` VALUES ('40', 'http://attachments.snail.com/snail-app/goods/20170308142140321.jpg', '“香蕊寒春剑”礼花', '688');
INSERT INTO `listdata` VALUES ('41', 'http://attachments.snail.com/snail-app/goods/20181017153659877.gif', '“关山魂梦长”礼花', '1298');
INSERT INTO `listdata` VALUES ('42', 'http://attachments.snail.com/snail-app/goods/20171017135848929.jpg', '“凤翅镏金镋”礼花', '647');
INSERT INTO `listdata` VALUES ('43', 'http://attachments.snail.com/snail-app/goods/20200311164138325.jpg', '“阳春弦雪”礼花', '1298');
INSERT INTO `listdata` VALUES ('44', 'http://attachments.snail.com/snail-app/goods/20200311162908599.jpg', '“弥尊棍套”礼花', '1298');
INSERT INTO `listdata` VALUES ('45', 'http://attachments.snail.com/snail-app/goods/20200311162612180.jpg', '“归觐刀匣”礼花', '156');
INSERT INTO `listdata` VALUES ('46', 'http://attachments.snail.com/snail-app/goods/20160318102421936.jpg', '黑水仙', '1298');
INSERT INTO `listdata` VALUES ('47', 'http://attachments.snail.com/snail-app/goods/20200731152832170.jpg', '沉湘宓妃琴', '654');
INSERT INTO `listdata` VALUES ('48', 'http://attachments.snail.com/snail-app/goods/20171221141911519.jpg', '霞翎凤落弓', '752');
INSERT INTO `listdata` VALUES ('49', 'http://attachments.snail.com/snail-app/goods/20200925143127713.jpg', '远山行香剑', '364');
INSERT INTO `listdata` VALUES ('50', 'http://attachments.snail.com/snail-app/goods/20200311163146495.jpg', '“引龙追凤环”礼花', '159');
INSERT INTO `listdata` VALUES ('51', 'http://attachments.snail.com/snail-app/goods/20190410174600985.jpg', '凤炎剑', '1298');
INSERT INTO `listdata` VALUES ('52', 'http://attachments.snail.com/snail-app/goods/20150722172832212.jpg', '邪龙双月刃', '1298');
INSERT INTO `listdata` VALUES ('53', 'http://attachments.snail.com/snail-app/goods/20161013113310774.jpg', '“残阳星陨刃”礼花', '354');
INSERT INTO `listdata` VALUES ('54', 'http://attachments.snail.com/snail-app/goods/20161012114714908.jpg', '“残阳星陨刃•双”礼花', '1298');
INSERT INTO `listdata` VALUES ('55', 'http://attachments.snail.com/snail-app/goods/20200311162709852.jpg', '“豪羽翠仙剑”礼花', '852');
INSERT INTO `listdata` VALUES ('56', 'http://attachments.snail.com/snail-app/goods/20200311162755305.jpg', '“金领冰露披”礼花', '498');
INSERT INTO `listdata` VALUES ('57', 'http://attachments.snail.com/snail-app/goods/20160518145413185.jpg', '星尘幻空披', '498');
INSERT INTO `listdata` VALUES ('58', 'http://attachments.snail.com/snail-app/goods/20200303182211215.jpg', '鹤影霞鸾披', '678');
INSERT INTO `listdata` VALUES ('59', 'http://attachments.snail.com/snail-app/goods/20190812115713270.jpg', '游龙戏凤.朱', '498');
INSERT INTO `listdata` VALUES ('60', 'http://attachments.snail.com/snail-app/goods/20190812120038823.jpg', '游龙戏凤.蓝', '499');
INSERT INTO `listdata` VALUES ('61', 'http://attachments.snail.com/snail-app/goods/20150527174601960.jpg', '追云“冥”礼花', '498');
INSERT INTO `listdata` VALUES ('62', 'http://attachments.snail.com/snail-app/goods/20150609173647807.jpg', '“锦龙氅”礼花', '454');
INSERT INTO `listdata` VALUES ('63', 'http://attachments.snail.com/snail-app/goods/20200311161740261.jpg', '悦人·双旦生肖礼包', '498');
INSERT INTO `listdata` VALUES ('64', 'http://attachments.snail.com/snail-app/goods/20200720114612354.jpg', '青龙偃月刀', '254');
INSERT INTO `listdata` VALUES ('65', 'http://attachments.snail.com/snail-app/goods/20200720114701332.jpg', '金丝大环刀', '396');
INSERT INTO `listdata` VALUES ('66', 'http://attachments.snail.com/snail-app/goods/20200720114806687.jpg', '方天画戟套', '395');
INSERT INTO `listdata` VALUES ('67', 'http://attachments.snail.com/snail-app/goods/20200720115108710.jpg', '易水寒冰剑鞘', '325');
INSERT INTO `listdata` VALUES ('68', 'http://attachments.snail.com/snail-app/goods/20190812114151684.jpg', '千情衣', '299');
INSERT INTO `listdata` VALUES ('69', 'http://attachments.snail.com/snail-app/goods/20190708102301640.jpg', '幻氤鲤墨衫', '196');
INSERT INTO `listdata` VALUES ('70', 'http://attachments.snail.com/snail-app/goods/20190909111004304.png', '小羿', '198');
INSERT INTO `listdata` VALUES ('71', 'http://attachments.snail.com/snail-app/goods/20151119111032546.png', '圣谛梵音裳', '252');
INSERT INTO `listdata` VALUES ('72', 'http://attachments.snail.com/snail-app/goods/20200311164910782.jpg', '鬼面修罗衣', '198');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loginregistry
-- ----------------------------
INSERT INTO `loginregistry` VALUES ('5', 'zzzz', '5edb5e9ed01de3b6bf5d96f38650673412e0bef1', '52252719981225253X', '15158306411');
INSERT INTO `loginregistry` VALUES ('6', 'zz', '5edb5e9ed01de3b6bf5d96f38650673412e0bef1', '52252719981225253X', '15158306411');
