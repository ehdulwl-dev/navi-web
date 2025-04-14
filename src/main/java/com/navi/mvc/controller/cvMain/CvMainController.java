package com.navi.mvc.controller.cvMain;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/cvMain")
@RequiredArgsConstructor
public class CvMainController {

    @GetMapping("/empty")
    public String cvMain(){
        log.debug("이력서(무) 메인페이지 접속!");
        return "views/cvMain/cvMain_empty";
    }

    @GetMapping("/filled")
    public String cvMain_filled(){
        log.debug("이력서(유) 메인페이지 접속!");
        return "views/cvMain/cvMain_filled";
    }

    @GetMapping("/Download")
    public String cvDownload(){
        log.debug("이력서 다운로드 페이지 접속!");
        return "views/cvMain/cvDownload";
    }

}
