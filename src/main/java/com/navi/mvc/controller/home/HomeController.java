package com.navi.mvc.controller.home;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@RequiredArgsConstructor
@Controller
public class HomeController {

    @GetMapping( "/")
    public String home() {
        log.debug("홈 화면 이동 !");
        return "views/home/home";
    }
}
