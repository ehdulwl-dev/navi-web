package com.navi.mvc.controller.clMain;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/clMake")
@RequiredArgsConstructor
public class ClMakeController{

    @GetMapping("/qestion")
    public String cvMain(){
        log.debug("이력서(무) 메인페이지 접속!");
        return "views/clMake/clWrite/clQestion";
    }

}