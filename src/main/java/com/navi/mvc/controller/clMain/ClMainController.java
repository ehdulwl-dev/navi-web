package com.navi.mvc.controller.clMain;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/clMain")
@RequiredArgsConstructor
public class ClMainController {

    @GetMapping("/empty")
    public String cvMain(){
        log.debug("자기소개서(무) 메인페이지 접속!");
        return "views/clMain/clMain_empty";
    }

    @GetMapping("/filled")
    public String cvMain_filled(){
        log.debug("자기소개서(유) 메인페이지 접속!");
        return "views/clMain/clMain_filled";
    }

    @GetMapping("/Download")
    public String cvDownload(){
        log.debug("자기소개서 다운로드 페이지 접속!");
        return "views/clMain/clDownload";
    }

}
