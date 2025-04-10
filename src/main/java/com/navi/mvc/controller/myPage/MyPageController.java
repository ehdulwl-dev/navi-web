package com.navi.mvc.controller.myPage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
public class MyPageController {

    @GetMapping("/myPage")
    public String myPage(){
        log.debug("마이페이지 접속 성공!");
        return "views/myPage/myPage";
    }
}
