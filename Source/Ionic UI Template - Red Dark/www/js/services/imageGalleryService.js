App.factory('ImageGalleryService', function() {
    return {
        getTitle: function() {
            return 'Image Gallery';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Category 1 (Animals)',
                    theme: 'layout1'
                },
                {
                    title: 'Subcategory 1 (Dogs)',
                    theme: 'layout2'
                },
                {
                    title: 'Category 2 (Music)',
                    theme: 'layout3'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout1: function() {
            return {
              containerBodyImage: 'img/background/31.jpg',
              items: [
                  {
                      id: 1,
                      title: 'Dogs',
                      image: 'img/gallery/dogs/14250733433_271362f4ff_h.jpg',
                      favorite: true,

                      items: [
                          {
                              id: 1,
                              title: 'Dog 1',
                              image: 'img/gallery/dogs/14250733433_271362f4ff_h.jpg'
                          },
                          {
                              id: 2,
                              title: 'Dog 2',
                              image: 'img/gallery/dogs/174085592_c0b7e5076f_o.jpg'
                          },
                          {
                              id: 3,
                              title: 'Dog 3',
                              image: 'img/gallery/dogs/174097822_6c0aae32e1_o.jpg'
                          },
                          {
                              id: 4,
                              title: 'Dog 4',
                              image: 'img/gallery/dogs/4733823624_a758c8e8e9_b.jpg'
                          },
                          {
                              id: 5,
                              title: 'Dog 5',
                              image: 'img/gallery/dogs/4939588185_4dc4fa8cca_b.jpg'
                          },
                          {
                              id: 6,
                              title: 'Dog 6',
                              image: 'img/gallery/dogs/6698150783_161b18182e_b.jpg'
                          },
                          {
                              id: 7,
                              title: 'Dog 7',
                              image: 'img/gallery/dogs/6787786882_4e74d00628_b.jpg'
                          },
                          {
                              id: 8,
                              title: 'Dog 8',
                              image: 'img/gallery/dogs/8206632393_36622366c6_k.jpg'
                          }
                      ]
                  },
                  {
                      id: 2,
                      title: 'Horses',
                      image: 'img/gallery/horses/1242426877_9cdace7a19_b.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: '',
                              image: 'img/gallery/horses/1242426877_9cdace7a19_b.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/horses/2795764001_1e899c8560_b.jpg'
                          },
                          {
                              id: 3,
                              title: '',
                              image: 'img/gallery/horses/3571783564_b02308c31c_b.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/horses/3724307231_7077e8a5da_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/horses/548518280_b408f3d2a5_o.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/horses/6990704333_abff211880_b.jpg'
                          },
                          {
                              id: 7,
                              title: '',
                              image: 'img/gallery/horses/8621170742_15cd967dc8_b.jpg'
                          },
                          {
                              id: 8,
                              title: '',
                              image: 'img/gallery/horses/9581032545_e388ee7d3e_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 3,
                      title: 'Cats',
                      image: 'img/gallery/cats/15636456045_f99e3a5ccd_k.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: '',
                              image: 'img/gallery/cats/15636456045_f99e3a5ccd_k.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/cats/3285731954_a31261bd38_o.jpg'
                          },
                          {
                              id: 3,
                              title: '',
                              image: 'img/gallery/cats/560380352_8b58b0611c_o.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/cats/6131811835_b7cdb594f3_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/cats/6944735673_7d201cbb98_k.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/cats/8470085922_ed703dcda3_b.jpg'
                          },
                          {
                              id: 7,
                              title: '',
                              image: 'img/gallery/cats/8854205418_3739d5b3e9_h.jpg'
                          },
                          {
                              id: 8,
                              title: '',
                              image: 'img/gallery/cats/9308613838_de3df521b0_b.jpg'
                          },
                          {
                              id: 9,
                              title: '',
                              image: 'img/gallery/cats/9657345685_b680cd813b_k.jpg'
                          }
                      ]
                  },
                  {
                      id: 4,
                      title: 'Kangaroos',
                      image: 'img/gallery/kangaroos/14018941654_b24dc40edd_k.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: 'Kangaroo 1',
                              image: 'img/gallery/kangaroos/14018941654_b24dc40edd_k.jpg'
                          },
                          {
                              id: 2,
                              title: 'Kangaroo 2',
                              image: 'img/gallery/kangaroos/4849609708_06a24058ec_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Kangaroo 3',
                              image: 'img/gallery/kangaroos/4901737404_cf375a44d3_b.jpg'
                          },
                          {
                              id: 4,
                              title: 'Kangaroo 4',
                              image: 'img/gallery/kangaroos/4962092282_15a076cb8c_b.jpg'
                          },
                          {
                              id: 5,
                              title: 'Kangaroo 5',
                              image: 'img/gallery/kangaroos/5366854530_35d6de81c2_b.jpg'
                          },
                          {
                              id: 6,
                              title: 'Kangaroo 6',
                              image: 'img/gallery/kangaroos/7643187732_3753aa9b70_k.jpg'
                          },
                          {
                              id: 7,
                              title: 'Kangaroo 7',
                              image: 'img/gallery/kangaroos/8275651371_0e5e6bffc4_k.jpg'
                          },
                          {
                              id: 8,
                              title: 'Kangaroo 8',
                              image: 'img/gallery/kangaroos/8672908837_1ec6c9c967_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 5,
                      title: 'Foxes',
                      image: 'img/gallery/foxes/2741843163_5aefaae694_b.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: 'Fox 1',
                              image: 'img/gallery/foxes/2741843163_5aefaae694_b.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/foxes/5461393397_b7bbff4c87_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Fox 3',
                              image: 'img/gallery/foxes/5872864880_b1739e6e76_b.jpg'
                          },
                          {
                              id: 4,
                              title: 'Fox 4',
                              image: 'img/gallery/foxes/6904712695_751bb39e16_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/foxes/6904714319_c4dbbb2b14_b.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/foxes/6977256115_af1011fbfb_h.jpg'
                          },
                          {
                              id: 7,
                              title: 'Fox 7',
                              image: 'img/gallery/foxes/7132259891_878e6513c4_k.jpg'
                          },
                          {
                              id: 8,
                              title: 'Fox 8',
                              image: 'img/gallery/foxes/7238361098_5d244ea023_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 6,
                      title: 'Eagles',
                      image: 'img/gallery/eagles/12111485434_015bcf17e0_k.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: 'Eagles 1',
                              image: 'img/gallery/eagles/12111485434_015bcf17e0_k.jpg'
                          },
                          {
                              id: 2,
                              title: 'Eagles 2',
                              image: 'img/gallery/eagles/12387369564_ee3e9810f3_k.jpg'
                          },
                          {
                              id: 3,
                              title: 'Eagles',
                              image: 'img/gallery/eagles/3358262896_8a623dc7ca_b.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/eagles/6130420503_b5516d49e4_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/eagles/7924818318_d4f0355bdd_k.jpg'
                          },
                          {
                              id: 6,
                              title: 'Eagles 6',
                              image: 'img/gallery/eagles/8626880581_7308f6a8a7_k.jpg'
                          },
                          {
                              id: 7,
                              title: 'Eagles 7',
                              image: 'img/gallery/eagles/9395841437_95035aed96_k.jpg'
                          }
                      ]
                  },
                  {
                      id: 7,
                      title: 'Squirrels',
                      image: 'img/gallery/squirrels/12683899725_ec12a691c5_k.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: 'Squirrels 1',
                              image: 'img/gallery/squirrels/12683899725_ec12a691c5_k.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/squirrels/12935575784_bcb43443f9_b.jpg'
                          },
                          {
                              id: 3,
                              title: '',
                              image: 'img/gallery/squirrels/15365307348_82551c3cb6_h.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/squirrels/2438938256_655ed4f254_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/squirrels/5194088091_f8af189189_b.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/squirrels/5339749381_f1c0a3040b_b.jpg'
                          },
                          {
                              id: 7,
                              title: 'Squirrels 7',
                              image: 'img/gallery/squirrels/6359846085_c88e231c01_b.jpg'
                          },
                          {
                              id: 8,
                              title: 'Squirrels 8',
                              image: 'img/gallery/squirrels/6583159839_0ba9c33a75_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 8,
                      title: 'Bears',
                      image: 'img/gallery/bears/14316604273_778ccdac73_b.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: '',
                              image: 'img/gallery/bears/14316604273_778ccdac73_b.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/bears/14567666406_61df9c0d52_k.jpg'
                          },
                          {
                              id: 3,
                              title: '',
                              image: 'img/gallery/bears/15665160302_f87492c246_k.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/bears/3946668599_90958b634c_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/bears/5396353993_d8bcf19d5e_b.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/bears/6346303116_7f3d463a68_b.jpg'
                          },
                          {
                              id: 7,
                              title: '',
                              image: 'img/gallery/bears/8568153824_ae2b3d3a02_k.jpg'
                          },
                          {
                              id: 8,
                              title: '',
                              image: 'img/gallery/bears/8797595259_e99bf75d2e_k.jpg'
                          }
                      ]
                  }
              ]
            }
        },
        getDataForLayout2: function() {
            return {
              containerBodyImage: 'img/background/31.jpg',
              items: [
                  {
                      id: 1,
                      title: 'Dog 1',
                      image: 'img/gallery/dogs/14250733433_271362f4ff_h.jpg'
                  },
                  {
                      id: 2,
                      title: 'Dog 2',
                      image: 'img/gallery/dogs/174085592_c0b7e5076f_o.jpg'
                  },
                  {
                      id: 3,
                      title: 'Dog 3',
                      image: 'img/gallery/dogs/174097822_6c0aae32e1_o.jpg'
                  },
                  {
                      id: 4,
                      title: 'Dog 4',
                      image: 'img/gallery/dogs/4733823624_a758c8e8e9_b.jpg'
                  },
                  {
                      id: 5,
                      title: 'Dog 5',
                      image: 'img/gallery/dogs/4939588185_4dc4fa8cca_b.jpg'
                  },
                  {
                      id: 6,
                      title: 'Dog 6',
                      image: 'img/gallery/dogs/6698150783_161b18182e_b.jpg'
                  },
                  {
                      id: 7,
                      title: 'Dog 7',
                      image: 'img/gallery/dogs/6787786882_4e74d00628_b.jpg'
                  },
                  {
                      id: 8,
                      title: 'Dog 8',
                      image: 'img/gallery/dogs/8206632393_36622366c6_k.jpg'
                  }
              ]
            };
        },
        getDataForLayout3: function() {
            return {
              containerBodyImage: 'img/background/31.jpg',
              items: [
                  {
                      id: 1,
                      title: 'Violins',
                      image: 'img/gallery/violins/147587554_205e3ed653_o.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: 'Violin 1',
                              image: 'img/gallery/violins/147587554_205e3ed653_o.jpg'
                          },
                          {
                              id: 2,
                              title: 'Violin 2',
                              image: 'img/gallery/violins/2322113757_808c904f04_o.jpg'
                          },
                          {
                              id: 3,
                              title: 'Violin 3',
                              image: 'img/gallery/violins/2323048092_b6c70654ef_o.jpg'
                          },
                          {
                              id: 4,
                              title: 'Violin 4',
                              image: 'img/gallery/violins/2348623142_af7802400f_b.jpg'
                          },
                          {
                              id: 5,
                              title: 'Violin 5',
                              image: 'img/gallery/violins/459221457_09e40e82a8_b.jpg'
                          },
                          {
                              id: 6,
                              title: 'Violin 6',
                              image: 'img/gallery/violins/5950552903_7dbea63895_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 2,
                      title: 'Drums',
                      image: 'img/gallery/drums/14258762970_33f3a049ed_b.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: 'Drum 1',
                              image: 'img/gallery/drums/14258762970_33f3a049ed_b.jpg'
                          },
                          {
                              id: 2,
                              title: 'Drum 2',
                              image: 'img/gallery/drums/2419154841_a4c2015605_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Drum 3',
                              image: 'img/gallery/drums/6500936951_bf8d21a4b7_b.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/drums/7587609934_f90d316fa0_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/drums/7672718592_ca4ccf7315_b.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/drums/8229110151_3c963f6a8d_k.jpg'
                          }
                      ]
                  },
                  {
                      id: 3,
                      title: 'Saxophones',
                      image: 'img/gallery/saxophones/3022692180_fd02682a44_b.jpg',
                      favorite: true,
                      items: [
                          {
                              id: 1,
                              title: '',
                              image: 'img/gallery/saxophones/3022692180_fd02682a44_b.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/saxophones/4268421378_e2d3ecdf1b_o.jpg'
                          },
                          {
                              id: 3,
                              title: '',
                              image: 'img/gallery/saxophones/4586115189_d4886a2118_b.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/saxophones/5823606898_77db8827b1_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/saxophones/7807389560_57b1d5b5f8_k.jpg'
                          },
                          {
                              id: 6,
                              title: '',
                              image: 'img/gallery/saxophones/870265218_716ebe2cb8_o.jpg'
                          }
                      ]
                  },
                  {
                      id: 4,
                      title: 'Trumpets',
                      image: 'img/gallery/trumpets/14163752896_453a37b84a_h.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: 'Trumpet 1',
                              image: 'img/gallery/trumpets/14163752896_453a37b84a_h.jpg'
                          },
                          {
                              id: 2,
                              title: 'Trumpet 2',
                              image: 'img/gallery/trumpets/2531134817_ba97791524_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Trumpet 3',
                              image: 'img/gallery/trumpets/4867822712_1b1d3da2cd_b.jpg'
                          },
                          {
                              id: 4,
                              title: 'Trumpet 4',
                              image: 'img/gallery/trumpets/4949712803_7fc832d2cc_b.jpg'
                          },
                          {
                              id: 5,
                              title: 'Trumpet 5',
                              image: 'img/gallery/trumpets/6186270505_cc834a94c6_o.jpg'
                          },
                          {
                              id: 6,
                              title: 'Trumpet 6',
                              image: 'img/gallery/trumpets/7865792422_ef00cb7840_k.jpg'
                          },
                          {
                              id: 7,
                              title: 'Trumpet 7',
                              image: 'img/gallery/trumpets/8044715752_9855063570_k.jpg'
                          }
                      ]
                  },
                  {
                      id: 5,
                      title: 'Pianos',
                      image: 'img/gallery/pianos/14287113341_fe14885b70_b.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: 'Piano 1',
                              image: 'img/gallery/pianos/14287113341_fe14885b70_b.jpg'
                          },
                          {
                              id: 2,
                              title: '',
                              image: 'img/gallery/pianos/5052063297_61b6386db5_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Piano 3',
                              image: 'img/gallery/pianos/5200112333_502355c045_b.jpg'
                          },
                          {
                              id: 4,
                              title: '',
                              image: 'img/gallery/pianos/5637747696_42cba72967_b.jpg'
                          },
                          {
                              id: 5,
                              title: '',
                              image: 'img/gallery/pianos/7310209818_537dd46419_b.jpg'
                          },
                          {
                              id: 6,
                              title: 'Piano 6',
                              image: 'img/gallery/pianos/8247668743_36fcf1f4bb_b.jpg'
                          }
                      ]
                  },
                  {
                      id: 6,
                      title: 'Accordions',
                      image: 'img/gallery/accordions/153706234_c473e8eabd_o.jpg',
                      favorite: false,
                      items: [
                          {
                              id: 1,
                              title: 'Accordion 1',
                              image: 'img/gallery/accordions/153706234_c473e8eabd_o.jpg'
                          },
                          {
                              id: 2,
                              title: 'Accordion 2',
                              image: 'img/gallery/accordions/2681657661_177a5edbc5_b.jpg'
                          },
                          {
                              id: 3,
                              title: 'Accordion 3',
                              image: 'img/gallery/accordions/3369363243_94fb76891d_b.jpg'
                          },
                          {
                              id: 4,
                              title: 'Accordion 4',
                              image: 'img/gallery/accordions/5316360932_719617fa1d_b.jpg'
                          },
                          {
                              id: 5,
                              title: 'Accordion 5',
                              image: 'img/gallery/accordions/6151326630_349b892d5a_b.jpg'
                          },
                          {
                              id: 6,
                              title: 'Accordion 6',
                              image: 'img/gallery/accordions/7607076588_593e509440_h.jpg'
                          }
                      ]
                  }
              ]
            };

        },
        getEvents: function() {
            return {
                onFavorite: function(item){
                    item.favorite = !item.favorite;
                }
            };
        },
        prepareParams: function(item) {
            return {
                imageGalleryVisible: true,
                theme: item.theme,
                title : this.getTitle(),
                data: this.getDataForTheme(item.theme),
                events: this.getEvents()
            };
        }
    };
});
