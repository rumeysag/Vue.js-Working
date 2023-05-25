new Vue ({
    el: "#app",
    data: {
        player_heal : 100,
        monster_heal : 100,
        logs : [],
        game_is_on : false,
        attack_multiple : 10,
        special_attack_multiple : 25,
        heal_up_multiple : 10,
        monster_attack_multiple :15,
        
    },
    methods:{
        start_game : function(){
            this.game_is_on = true;
        },

        attack : function(){
            var point = Math.ceil(Math.random() * this.attack_multiple);
            this.monster_heal-=point;
            this.monster_attack();
            this.add_to_log({ turn : "p" , text : "OYUNCU ATAĞI (" + point +")"})
        },
        special_attack : function(){
            var point = Math.ceil(Math.random() * this.special_attack_multiple);
            this.monster_heal-=point;
            this.monster_attack();
            this.add_to_log({ turn : "p" , text : "ÖZEL OYUNCU ATAĞI (" + point +")"})
        },
        heal_up : function(){
            var point = Math.ceil(Math.random() * this.heal_up_multiple);
            this.player_heal+=point;
            this.monster_attack();
            this.add_to_log({ turn : "p" , text : "İLK YARDIM (" + point +")"})
        },
        give_up  :function(){
            this.player_heal= 0; 
            this.add_to_log({ turn : "p" , text : "OYUNCU PES ETTİ!!!!"})
        },
        monster_attack: function(){
            var point = Math.ceil(Math.random() * this.monster_attack_multiple);
            this.player_heal-=point;
            this.add_to_log({ turn : "m" , text : "CANAVAR ATAĞI (" + point +")"})
        },
        add_to_log : function(log){
            this.logs.push(log);
        }

    },
    watch : {
        player_heal : function(value){
            if(value <= 0){
                this.player_heal = 0;
                if(confirm("Oyunu KAYBETTİN! Tekrar denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal= 100;
                    this.logs = [];
                }
            } else if (value>=100){
                this.player_heal =100
            }
        },
        monster_heal : function(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("Oyunu KAZANDIN! Tekrar denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal= 100;
                }
            } 
        }
    },
    computed : {
        player_progress :function(){
            return {
            width : this.player_heal + '%'
        }
        },
        monster_progress :function(){
            return {
            width : this.monster_heal + '%'
        }
        }
    }
})