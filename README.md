Spigot 1.10.x OP 常用

1. RPGItem地址 https://www.spigotmc.org/resources/rpgitems.17549/

2. RPGItem命令 https://github.com/NyaaCat/RPGitems-reloaded/wiki/%E5%91%BD%E4%BB%A4

3. 常用权限（Spigot/CraftBukkit） http://wiki.bukkit.org/CraftBukkit_Commands

4. 数据值来源 http://minecraft-zh.gamepedia.com/

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

rpgitem test0 power command 0 right 这是一个经验书，吃掉之后获得50经验 `/xp 50 {player}` minecraft.command.xp
（其中{player}指的是使用者，最后的是权限，从上面的文档去找权限。）

rpgitem test0 drop zombie 10 （僵尸10%几率掉落）

rpgitem test0 drop pig_zombie 10 （僵尸猪人10%掉落）




