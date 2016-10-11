Spigot 1.10.x OP 常用

1. RPGItem地址 https://www.spigotmc.org/resources/rpgitems.17549/

2. RPGItem命令 https://github.com/NyaaCat/RPGitems-reloaded/wiki/%E5%91%BD%E4%BB%A4

3. 常用权限（Spigot/CraftBukkit） http://wiki.bukkit.org/CraftBukkit_Commands

4. 数据值来源 http://minecraft-zh.gamepedia.com/

5. Spigot 1.10.x https://hub.spigotmc.org/jenkins/job/BuildTools/ 注意下载里面的BuildTools.jar就好了，然后执行它。


举例：

设置某个物品右键使用增加50经验

rpgitem test0 create （创建）

rpgitem test0 item 339 （设置为 纸 的素材）

rpgitem test0 display 经验书 （显示名字为经验书）

rpgitem test0 hand 经验（左边手持类型）

rpgitem test0 type 经验（右边物品类型）

rpgitem test0 damage 0 （去除伤害显示）

rpgitem test0 quality legendary （设置为传奇物品，还有epic uncommon 和 trash）

rpgitem test0 power consume （设置为消耗品，右键使用后消失，与food冲突）

rpgitem test0 power command 0 right 这是一个经验书，吃掉之后获得50经验 \`/xp 50 {player}\` minecraft.command.xp
（其中{player}指的是使用者，最后的是权限，从上面的文档去找权限。）

rpgitem test0 drop zombie 10 （僵尸10%几率掉落）

rpgitem test0 drop pig_zombie 10 （僵尸猪人10%掉落）



BossShop 权限：
BossShop.open - 允许使用牌子或者命令打开商店.

BossShop.open.sign - 允许使用牌子打开商店.

BossShop.open.command - 允许使用命令打开商店.

BossShop.open.command.<shopname> - 允许通过命令打开特定名字的商店.

BossShop.open.other - 允许为其他玩家打开商店.

BossShop.close - 允许通过命令关闭商店.

BossShop.createSign - 允许创建一个商店牌子.

BossShop.reload - 允许重载插件.

BossShop.check - 允许使用check命令.


BossShop 符号
[<3] -> ❤

[*] ->

[] -> ✹

[o] ->

[v] -> ✔

[+] -> ♦

[x] -> ✦

[%] -> ♠

[%%] -> ♣

[radioactive] -> ☢

[peace] -> ☮

[moon] -> ☾

[crown] -> ♔

[note] -> ♩


BossShop物品属性
MenuItem:

- id:<id> - 显示的图标的物品ID,此选项和Type只需要一个即可,比如石头的ID就是1.

- type:<type> - 显示的图标的物品类型,此选项和Type只需要一个即可,比如石头就是Stone.

- durability:<durability> - 耐久值,或者子ID,就是各种颜色羊毛的ID冒号后面的部分.

- amount:<amount> - 数量.

- name:<name> - 名称,当鼠标悬停时显示在最顶端的项目名称,可以使用颜色代码,符号代码(参见商店名称部分),以及特殊标记(见下).

- lore:<line1#line2#line3> - 描述文字,当鼠标悬停是显示的物品描述,可以使用颜色代码,符号代码(参见商店名称部分),以及特殊标记(见下),使用"#"可以换行.

- enchantment:<enchantment name>#<level>

- enchantmentid:<enchantment id>#<level> - 这两个都是显示的物品上的附魔.附魔可以用附魔名称(英文)#等级或者附魔ID#等级来表示,具体名称和等级见下.

- color:<red number>#<green number>#<blue number> - RGB颜色值,似乎只对皮甲有用...可以将皮甲染色.

- potioneffect:<potion name>#<level>#<time in seconds> - 药水的名称(英文)#等级#时间(秒),当type为"type:POTION"时生效,表示这瓶药水的属性,具体药水效果表见下.


Placeholder复用

%balance% - 玩家当前余额.

%balancepoints% - 玩家当前点券余额.

%itemname% - 项目名称

%price% - 价格

%pricetype% - 价格类型

%reward% - 奖励

%rewardtype% - 奖励类型


附魔ID与名称

中文名	英文名(可在插件中使用)

防具

0	保护	PROTECTION_ENVIRONMENTAL

1	火焰保护	PROTECTION_FIRE

2	摔落保护	PROTECTION_FALL

3	爆炸保护	PROTECTION_EXPLOSIONS

4	弹射物保护	PROTECTION_PROJECTILE

头盔

5	水下呼吸	OXYGEN

6	水下速掘	WATER_WORKER

7	荆棘	THORNS

武器

16	锋利	DAMAGE_ALL

17	亡灵杀手	DAMAGE_UNDEAD

18	节肢杀手	DAMAGE_ARTHROPODS

19	击退	KNOCKBACK

20	火焰附加	FIRE_ASPECT

21	抢夺	LOOT_BONUS_MOBS

工具

32	效率	DIG_SPEED

33	精准采集	SILK_TOUCH

34	耐久	DURABILITY

35	时运	LOOT_BONUS_BLOCKS

弓

48	力量	ARROW_DAMAGE

49	冲击	ARROW_KNOCKBACK

50	火矢	ARROW_FIRE

51	无限	ARROW_INFINITE

钓竿

61	海之眷顾	LUCK

62	诱饵	LURE


效果名称

中文名	英文名(可在插件中使用)

加速	SPEED

缓慢	SLOW

挖掘速度	FAST_DIGGING

挖掘疲劳	SLOW_DIGGING

力量	INCREASE_DAMAGE

瞬间治疗	HEAL

瞬间伤害	HARM

跳跃提升	JUMP

眩晕	CONFUSION

生命回复	REGENERATION

生命回复	REGENERATION

抗性	DAMAGE_RESISTANCE

抗火	FIRE_RESISTANCE

水下呼吸	WATER_BREATHING

隐身	INVISIBILITY

失明	BLINDNESS

夜视	NIGHT_VISION

饥饿	HUNGER

虚弱	WEAKNESS

中毒	POISON

凋零	WITHER

生命提升	HEALTH_BOOST

吸收	ABSORPTION

饱食	SATURATION



