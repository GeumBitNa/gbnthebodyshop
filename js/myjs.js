$(function(){
	 		var loader = $(".lds-roller");
	 			$(window).load(function(){
	 				loader.delay(3000).fadeOut(1000);
	 			});
	 		var black_bg = $("#black_bg");
	 		var html = $("html");
	 		var cart = $(".cart_icon");
	 		var login = $(".login_icon");
	 		var login_modal = $("form.login_modal");
	 		var login_modal_xbtn = $("form.login_modal .submit input");
	 		var sign_up = $(".sign_up_icon");
	 		var sign_up_modal = $("form.sign_up_modal");
	 		var sign_up_modal_xbtn = $("form.sign_up_modal .submit1 input");
	 			cart.click(function(){
	 				alert("로그인 후 이용가능합니다.")
	 			})
	 			login.click(function(){
	 				login_modal.fadeIn(500);
	 				black_bg.fadeIn(200);
	 				html.css("overflow","hidden");
	 				sign_up_modal.fadeOut(500);
	 			})
	 			login_modal_xbtn.eq(1).click(function(){
	 				login_modal.fadeOut(500);
	 				black_bg.fadeOut(200);
	 				html.css("overflow","visible");
	 			})
	 			sign_up.click(function(){
	 				sign_up_modal.fadeIn(500);
	 				black_bg.fadeIn(200);
	 				html.css("overflow","hidden");
	 				login_modal.fadeOut(500);
	 			})
	 			sign_up_modal_xbtn.eq(1).click(function(){
	 				sign_up_modal.fadeOut(500);
	 				black_bg.fadeOut(200);
	 				html.css("overflow","visible");
	 			})
	 			
	 		// -----------------------------------------------------------
	 		// 메뉴 active 시
	 		var logo=$("#nav_bg #logo");
	 		var menu=$("#nav_bg ul li");
	 		var ht = $(window).height();
	 		$(window).resize(function(){
				ht=$(window).height();
			})

	 		logo.click(function(){
	 			menu.removeClass("active");
	 			logo.addClass("active");	
	 		  	})
	 		menu.click(function(){
	 			var tg=$(this);	
	 			menu.removeClass("active");
	 			logo.removeClass("active");
	 			tg.addClass("active");

	 			$("html,body").animate({scrollTop:nowTop});
	 			 })	
	 		// 마우스휠 스크롤시 메뉴 자동변경
	 		$(window).scroll(function(){
				var myScrollTop = $(window).scrollTop();
				if(myScrollTop>=0 && myScrollTop<ht){
					menu.removeClass("active");
					logo.addClass("active");
				}else if(myScrollTop>=ht && myScrollTop<ht*2){
					menu.removeClass("active");
					menu.eq(0).addClass("active");
					logo.removeClass("active");
				}else if(myScrollTop>=ht*2 && myScrollTop<ht*3){
					menu.removeClass("active");
					menu.eq(1).addClass("active");
					logo.removeClass("active");
				}else if(myScrollTop>=ht*3 && myScrollTop<ht*4){
					menu.removeClass("active");
					menu.eq(2).addClass("active");
					logo.removeClass("active");
				}else if(myScrollTop>=ht*4 && myScrollTop<ht*5){
					menu.removeClass("active");
					menu.eq(3).addClass("active");
					logo.removeClass("active");
				}else{
					menu.removeClass("active");
					menu.eq(4).addClass("active");
					logo.removeClass("active");
				}

				if(myScrollTop>4500){
					var tabContents = $(".tab_contents");
					tabContents.animate({"bottom":"60px"},1000)
				}
	 		})

	 		// -----------------------------------------------------------
	 		// [1page]
	 		var p1_modal=$(".new_modal");
	 		var p1_modalbtn=$(".new_modal a");
	 		var p1_xbtn=$(".new_modal i.fa-times-circle");

	 		p1_xbtn.click(function(){
	 			p1_modal.slideUp(600);
	 			p1_modalbtn.slideUp(700);
	 		})
	 		// -----------------------------------------------------------

	 		// -----------------------------------------------------------
	 		// [2page]
	 		var island=$(".island");
	 		var sub_title=$(".sub_title li");
	 		var sub_island=$(".sub_island div");
	 		var p2_text=$(".p2_text")
	 		var p2_modal=$(".p2_modal li")
	 		var p2_modal_xbtn=$("ol.p2_modal li .p2_xbtn")
	 		var sub_island =$(".sub_island");
	 		var p2_cart_btn =$(".p2_cart_btn");

	 		 sub_title.hide();
	 		island.click(function(){
	 			var tg=$(this);	
	 			var i=tg.index();
	 			island.removeClass("p2_active");
	 			island.eq(i).addClass("p2_active");
	 			sub_title.hide();
	 			sub_title.eq(i).show();
	 			p2_text.hide();
	 			sub_island.removeClass("active");
	 			sub_island.eq(i).addClass("active");
	 		})
	 		 p2_modal.hide();
	 		sub_title.click(function(){
	 			var tg=$(this);	
	 			var i=tg.index();
	 			p2_modal.eq(i).fadeIn(200).css("z-index",999999);
	 			black_bg.fadeIn(200); 
	 			html.css("overflow","hidden");
	 		})	
	 		p2_modal_xbtn.click(function(){
	 			p2_modal.fadeOut(200);
	 			black_bg.fadeOut(200); 
	 			html.css("overflow","visible");
	 		})
	 		black_bg.click(function(){
	 			p2_modal.fadeOut(200);
	 			black_bg.fadeOut(200); 
	 			html.css("overflow","visible");
	 		})
	 		p2_cart_btn.click(function(){
				alert("제품이 장바구니에 담겼습니다.\n우측 메뉴의 Cart 페이지에서 상품을 확인해주세요.");
			})
	 		// -----------------------------------------------------------


	 		// -----------------------------------------------------------
	 		// [3page]

	 		// 향수 제품 캐러셀	
	 		var p3_carousel_img = $("#p3_product li"),
	 			p3_carousel_btn = $(".p3_btn_set li"),
	 		    p3_carousel_text = $(".p3_text li"),
	 		    p3_carousel_btn_prve = $(".fa-chevron-left"),
	 		    p3_carousel_btn_next = $(".fa-chevron-right"),
	 		    get = $(".get"),
	 		    cart_btn = $(".get .cart_btn"),
	 		    get_btn = $(".get .get_btn"),
	 		    p3_current1 = 0,
	 		    p3_current2 = 0,
	 		    p3_i =0;
	 		    media_btn = $("div.video_icon_box")
	 		    media = $("iframe"),
	 		    media_xbtn = $(".media_xbtn")


	 		media.hide();
	 		media_xbtn.hide();    
	 		media_btn.click(function(){
	 			media.fadeIn(200);
	 			black_bg.fadeIn(200);
	 			media_xbtn.fadeIn(200);
	 			html.css("overflow","hidden");
	 		});
	 		media_xbtn.click(function(){
	 			media.fadeOut(200);
	 			black_bg.fadeOut(200);
	 			media_xbtn.fadeOut(200);
	 			html.css("overflow","visible");
	 		});
	 		black_bg.click(function(){
	 			media.fadeOut(200);
	 			black_bg.fadeOut(200);
	 			media_xbtn.fadeOut(200);
	 			html.css("overflow","visible");
	 		});


	 		cart_btn.click(function(){
				alert("제품이 장바구니에 담겼습니다.\n우측 메뉴의 Cart 페이지에서 상품을 확인해주세요.");
			})
			p3_carousel_text.hide();
			p3_carousel_text.eq(0).show();

			// carousel_btn_prve버튼 클릭시 start
			p3_carousel_btn_prve.click(function(){
			 	// 향수 제품 캐러셀	
			 	var p3_currentImg =p3_carousel_img.eq(p3_current1);
			 	var p3_nextImg =p3_carousel_img.eq(p3_current1=p3_current1-1);
			 	var p3_nextText =p3_carousel_text.eq(p3_current2=p3_current2-1);
			 	p3_currentImg.stop().css("left",0).animate({"left":"150%"});
			 	p3_nextImg.stop().css("left","-150%").animate({"left":0});	
			 	// 향수 설명 캐러셀(글자 나타남)	
			 	p3_carousel_text.stop().hide();
			 	p3_nextText.stop().fadeIn(800);
			 	get.stop().fadeIn(800);

			 	if(p3_current1==-1){
			 		p3_current1=4;
			 		var p3_currentImg =p3_carousel_img.eq(p3_current1);
			 		var p3_nextImg =p3_carousel_img.eq(p3_current1=p3_current1-1);
			 		p3_currentImg.stop().css("left",0).animate({"left":"150%"});
			 		p3_nextImg.stop().css("left","-150%").animate({"left":0});
			 	}
			 	if(p3_current2==-1){
			 		p3_current2=4;
			 		var p3_nextText =p3_carousel_text.eq(p3_current2=p3_current2-1);
			 		p3_carousel_text.stop().hide();
			 		p3_nextText.stop().fadeIn(800);
			 		get.stop().fadeIn(800);
			 	}
			 	p3_i=p3_i-1;
				p3_carousel_btn.removeClass("p3_active");
				p3_carousel_btn.eq(p3_i).addClass("p3_active");
			 	if(p3_i==-1){
			 	p3_i=3;
			 	p3_carousel_btn.eq(p3_i).addClass("p3_active");
			 	}
			 })// carousel_btn_next버튼 클릭시 end

			 // carousel_btn_next버튼 클릭시		
			 p3_carousel_btn_next.click(function(){
			 	// 향수 제품 캐러셀	
			 	var p3_currentImg =p3_carousel_img.eq(p3_current1);
			 	var p3_nextImg =p3_carousel_img.eq(p3_current1=p3_current1+1);
			 	var p3_nextText =p3_carousel_text.eq(p3_current2=p3_current2+1);
			 	p3_currentImg.stop().css("left",0).animate({"left":"-150%"});
			 	p3_nextImg.stop().css("left","150%").animate({"left":0});	
			 	// 향수 설명 캐러셀(글자 나타남)	
			 	p3_carousel_text.stop().hide();
			 	p3_nextText.stop().fadeIn(800);
			 	get.stop().fadeIn(800);

			 	if(p3_current1==4){
			 		p3_current1=-1;
			 		var p3_currentImg =p3_carousel_img.eq(p3_current1);
			 		var p3_nextImg =p3_carousel_img.eq(p3_current1=p3_current1+1);
			 		p3_currentImg.stop().css("left",0).animate({"left":"-150%"});
			 		p3_nextImg.stop().css("left","150%").animate({"left":0});
			 	}
			 	if(p3_current2==4){
			 		p3_current2=-1;
			 		var p3_nextText =p3_carousel_text.eq(p3_current2=p3_current2+1);
			 		p3_carousel_text.stop().hide();
			 		p3_nextText.stop().fadeIn(800);
			 		get.stop().fadeIn(800);
			 	}
			 	p3_i=p3_i+1;
                p3_carousel_btn.removeClass("p3_active");
                p3_carousel_btn.eq(p3_i).addClass("p3_active");
                if(p3_i==4){
                p3_i=0;
                p3_carousel_btn.eq(p3_i).addClass("p3_active");
                }
		 	})

			 // 하단캐로셀 버튼 클릭시 start
	 	 	p3_carousel_btn.click(function(){
	 	 		var tg = $(this)
			 	var p3_i = tg.index();
			 	if(p3_current1==p3_i) return 0;
			 	if(p3_current2==p3_i) return 0;

			 	move(p3_i);

			 	function move(p3_i){
			 		var p3_currentImg = p3_carousel_img.eq(p3_current1);
			 		var p3_nextImg = p3_carousel_img.eq(p3_i);
			 		p3_currentImg.css("left",0).animate({"left":"-150%"});
			 		p3_nextImg.css("left","150%").animate({"left":0});
			 		p3_current1 =p3_i;
			 		var p3_nextText =p3_carousel_text.eq(p3_i);
			 		p3_carousel_text.stop().hide();
			 		p3_nextText.stop().fadeIn(800);
			 		get.stop().fadeIn(800);
			 		p3_current2 =p3_i;
			 	}
			 	// 인디케이터 버튼 클릭시 활성화
			 	p3_carousel_btn.removeClass("p3_active");
			 	tg.addClass("p3_active");

	 	 	})// 하단캐로셀 버튼 클릭시 end

	 		// 스크롤에 따른 꽃잎 움직임
				var s = skrollr.init();	
	 		// -----------------------------------------------------------

	 		// -----------------------------------------------------------
	 		// [4page]

	 		// 4page 이벤트창 캐러셀	
	 		var p4_carousel_img = $(".event_content li");
	 		var p4_carousel_btn = $(".event_btn_set li");
	 		var p4_carousel_btn_prve = $("#event .tip_left");
			var p4_carousel_btn_next = $("#event .tip_right");
			var p4_current = 0;
			var p4_i = 0;

			// 화면 자동으로 슬라이드
			setInterval(function(){
				var prev=p4_carousel_img.eq(p4_current);
				prev.css("left",0).animate({"left":"-120%"},1000);
				p4_current=p4_current+1;
				if(p4_current==3) p4_current=0;
				var next=p4_carousel_img.eq(p4_current);
				next.css("left","120%").animate({"left":0},1000);
			},3000);


			// carousel_btn_prve버튼 클릭시 start
			 p4_carousel_btn_prve.click(function(){
			 	var p4_currentImg = p4_carousel_img.eq(p4_current);
			 	var p4_nextImg = p4_carousel_img.eq(p4_current-=1);
			 	p4_currentImg.stop().css("left",0).animate({"left":"120%"});
			 	p4_nextImg.stop().css("left","-120%").animate({"left":0});	

			 if(p4_current==-1){
			 	p4_current=3;
			 	var p4_currentImg = p4_carousel_img.eq(p4_current);
			 	var p4_nextImg = p4_carousel_img.eq(p4_current-=1);
			 	p4_currentImg.stop().css("left",0).animate({"left":"120%"});
			 	p4_nextImg.stop().css("left","-120%").animate({"left":0});	
			 }
			 
				p4_i=p4_i-1;
			 	p4_carousel_btn.removeClass("p4_active");
				p4_carousel_btn.eq(p4_i).addClass("p4_active");
			 if(p4_i==-1){
			 	p4_i=2;
			 	p4_carousel_btn.eq(p4_i).addClass("p4_active");
			 }
			 })// carousel_btn_prve버튼 클릭시 end

			 // carousel_btn_next버튼 클릭시 start		
			 p4_carousel_btn_next.click(function(){
			 	var p4_currentImg =p4_carousel_img.eq(p4_current);
			 	var p4_nextImg =p4_carousel_img.eq(p4_current=p4_current+1);
			 	p4_currentImg.stop().css("left",0).animate({"left":"-120%"});
			 	p4_nextImg.stop().css("left","120%").animate({"left":0});	

			 	if(p4_current==3){
			 	   p4_current=-1;	
			 	   var p4_currentImg =p4_carousel_img.eq(p4_current);
			 		var p4_nextImg =p4_carousel_img.eq(p4_current=p4_current+1);
			 		p4_currentImg.stop().css("left",0).animate({"left":"-120%"});
			 		p4_nextImg.stop().css("left","120%").animate({"left":0});		
			 		}

			 		 p4_i+=1;
                 p4_carousel_btn.removeClass("p4_active");
                 p4_carousel_btn.eq(p4_i).addClass("p4_active");
                 if(p4_i==3){
                    p4_i=0;
                  p4_carousel_btn.eq(p4_i).addClass("p4_active");
                  }
		 	})// carousel_btn_prve버튼 클릭시 end
			
		 	
			// 하단캐로셀 버튼 클릭시 start
	 	 	p4_carousel_btn.click(function(){
	 	 		var tg = $(this)
			 	var p4_i = tg.index();
			 	if(p4_current==p4_i) return 0;

			 	move(p4_i);

			 	function move(p4_i){
			 		var p4_currentImg = p4_carousel_img.eq(p4_current);
			 		var p4_nextImg = p4_carousel_img.eq(p4_i);
			 		p4_currentImg.css("left",0).animate({"left":"-120%"});
			 		p4_nextImg.css("left","120%").animate({"left":0});
			 		p4_current =p4_i;
			 	}
			 	// 인디케이터 버튼 클릭시 활성화
			 	p4_carousel_btn.removeClass("p4_active");
			 	tg.addClass("p4_active");
	 	 	})// 하단캐로셀 버튼 클릭시 end

	 	 	// 지난 이벤트 모달창
	 	 	var airballoon_e = $(".p4_airballoon_e");
	 	 	var last_event = $(".last_event");
	 	 	var p4_xbtn1 = $(".last_event .p4_xbtn1");
	 	 	var last_event_btn = $(".last_event .last_event_btn");

	 	 	airballoon_e.click(function(){
	 	 		last_event.fadeIn(500);
	 	 		html.css("overflow","hidden");
	 	 	})
	 	 	p4_xbtn1.click(function(){
	 	 		last_event.fadeOut(500);
	 	 		html.css("overflow","visible");
	 	 	})
	 	 	last_event_btn.click(function(){
	 	 		alert("당첨을 축하드립니다!.\n---------------------------------\n  김*하 daksn****\n  오*희 taehg****\n  김*호 yayy***\n  최*정 eunjeo***\n  이*진 lsj3******\n  한*영 yayy****\n  김*연 yon******\n  문*은 woorii****\n  윤*아 mi****\n  이*원 lov*****\n---------------------------------\n 더바디샵 이벤트에 참여해주신 모든 분들께 감사의 인사를 드립니다.");
	 	 	})

	 	 	// 공병수거 캠페인 클릭
	 	 	var airballoon_c = $(".p4_airballoon_c");
	 	 	var campaign = $(".campaign");
	 	 	var p4_xbtn2 = $(".campaign .p4_xbtn2");

	 	 	airballoon_c.click(function(){
	 	 		campaign.slideDown(1000);
	 	 		black_bg.fadeIn(1000);
	 	 		html.css("overflow","hidden");
	 	 	})
	 	 	p4_xbtn2.click(function(){
	 	 		campaign.slideUp(1000);
	 	 		black_bg.fadeOut(1000);
	 	 		html.css("overflow","visible");
	 	 	})
	 	 	black_bg.click(function(){
	 	 		campaign.slideUp(1000);
	 	 		black_bg.fadeOut(1000);
	 	 		html.css("overflow","visible");
	 	 	})
	 		// -----------------------------------------------------------


	 		// -----------------------------------------------------------
	 		// [5page] 

	 		// 팁 모달창 start
	 		var tip1_btn=$(".tip1 span")
	 		var tip2_btn=$(".tip2 span")
	 		var tip3_btn=$(".tip3 span")
	 		var tip_book=$(".tip_modal_bg")
	 		var p5_xbtn=$(".tip_modal_bg .p5_xbtn")
	 		var tip_modal=$(".tip_modal_bg .tip_modalbox .tip_modal")
	 		

	 		 tip1_btn.click(function(){
	 		 	tip_book.fadeIn(500);
	 		 	p5_xbtn.fadeIn(500);
	 		 	tip_modal.eq(0).fadeIn(500);
	 		 	black_bg.fadeIn(500); 
	 		 	html.css("overflow","hidden");
	 		 })
	 		  tip2_btn.click(function(){
	 		 	tip_book.fadeIn(500);
	 		 	p5_xbtn.fadeIn(500);
	 		 	tip_modal.eq(1).fadeIn(500);
	 		 	black_bg.fadeIn(500); 
	 		 	html.css("overflow","hidden");
	 		 })
	 		  tip3_btn.click(function(){
	 		 	tip_book.fadeIn(500);
	 		 	p5_xbtn.fadeIn(500);
	 		 	tip_modal.eq(2).fadeIn(500);
	 		 	black_bg.fadeIn(500); 
	 		 	html.css("overflow","hidden");
	 		 })
	 		  p5_xbtn.click(function(){
	 		 	tip_book.fadeOut(500);
	 		 	p5_xbtn.fadeOut(500);
	 		 	tip_modal.fadeOut(500);
	 		 	black_bg.fadeOut(500); 
	 		 	html.css("overflow","visible");
	 		 })
	 		  black_bg.click(function(){
	 			p2_modal.fadeOut(500);
	 			tip_book.fadeOut(500); 
	 			html.css("overflow","visible");
	 		})

	 	 	// -----------------------------------------------------------
	 		// [6page] 

	 		// 탭 컨텐츠 start	 		
			var tabContents = $(".tab_contents .content");
			var tabList = $(".tab_contents li")

			tabContents.hide();
			tabContents.eq(0).show();

			tabList.click(function(){
				var i =$(this).index();
				// alert(i);
				tabContents.hide();
				tabContents.eq(i).show();
				})

			// 탭버튼을 클릭시 해당 탭 활성화		
				var tabList=$(".tab_contents li");
				tabList.click(function(){
					tabList.removeClass("active");
	 			 	$(this).addClass("active");
			})// 탭 컨텐츠 end

			// 손나무, 지구 모달창 start	
			var manifesto_enrich=$(".manifesto_enrich");
			var manifesto_enrich_modal =$(".manifesto_enrich_modal")
			var p6_xbtn =$(".manifesto_enrich_modal .fa-times-circle")
			var butterfly =$(".butterfly")
		 		
		 		manifesto_enrich.click(function(){
					var tg=$(this);	
		 			 tg.addClass("active");	 
		 			 manifesto_enrich.animate({"bottom":"80px"},1000,"linear");
		 			 manifesto_enrich_modal.fadeIn(500);
		 			 p6_xbtn.fadeIn(500);
		 			 black_bg.fadeIn(500); 
		 			 $(".p6_click").hide();
		 			 $(".p6_clicktext").hide();
		 			 html.css("overflow","hidden");
		 			 butterfly.css({"transform":"rotateZ(0deg)","transform":"rotateY(0deg)"}).animate({"top":"480px","margin-left":"-600px"},2000);
		 		})
		 		p6_xbtn.click(function(){
		 			manifesto_enrich.animate({"bottom":"-220px"},1000,"linear");
		 			manifesto_enrich_modal.fadeOut(500);
		 			black_bg.fadeOut(500);
		 			$(".p6_click").delay(500).fadeIn(500);
		 			$(".p6_clicktext").delay(500).fadeIn(500);
		 			html.css("overflow","visible");
		 			butterfly.css({"transform":"rotateZ(80deg)","transform":"rotateY(180deg)"}).animate({"top":"230px","margin-left":"-450px"},2000);
		 		})
		 		black_bg.click(function(){
	 				p6_xbtn.fadeOut(500);
	 				manifesto_enrich.animate({"bottom":"-220px"},1000,"linear");
		 			manifesto_enrich_modal.fadeOut(500);
	 				tip_book.fadeOut(500); 
	 				$(".p6_click").delay(500).fadeIn(500);
		 			$(".p6_clicktext").delay(500).fadeIn(500);
		 			html.css("overflow","visible");
		 			butterfly.css({"transform":"rotateZ(80deg)","transform":"rotateY(180deg)"}).animate({"top":"230px","margin-left":"-450px"},2000);
	 			})

		 	var earth=$(".earth")
		 	var earth_modal=$(".earth_modal")
		 	var p6_close1=$(".earth_modal .fa-times-circle")
		 		earth.click(function(){
		 			earth_modal.fadeToggle(300);
		 			p6_close1.fadeToggle(300);
		 		})
		 		p6_close1.click(function(){
		 			earth_modal.fadeOut(300);
		 			p6_close1.fadeOut(300);
		 		})
		 		black_bg.click(function(){
	 				p2_modal.fadeOut(300);
	 				tip_book.fadeOut(300); 
	 			})
	 		// 손나무, 지구 모달창 end

	 	// 	// 마우스휠 스크롤시 화면 스르륵--------------------------------
	 	// 	$("#wrapper").on("mousewheel",function(event, delta){
	 	// 		var top = $(window).scrollTop();
	 	// 	// 모달창 떠있을 때 스크롤되지않도록 구현
			// 	if(login_modal.css("display")=="block" || sign_up_modal.css("display")=="block" || p2_modal.css("display")=="block" || last_event.css("display")=="block" || campaign.css("display")=="block" || tip_modal.css("display")=="block" || manifesto_enrich_modal.css("display")=="block" || earth_modal.css("display")=="block"){
			// 		return 0;					
			// 	}	
			// if(delta>0){
			// // 마우스휠을 올렸을 때 실행구문
			// 	// var prev = $(this).prev().offset().top;
			// 	var prev = top-970;
			// 	$("html,body").stop().animate({"scrollTop":prev},700,"linear")
			// }else if(delta<0){
			// // 마우스휠을 내렸을 때 실행구문
			// 	// var next = $(this).next().offset().top;
			// 	var next = top+970;
			// 	$("html,body").stop().animate({"scrollTop":next},700,"linear")
			// }
			// })
	 	})