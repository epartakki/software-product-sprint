// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    
    private List<String> greeting;


    @Override
    public void init() {
    greeting = new ArrayList<>();
    greeting.add("Halloumi");
    greeting.add("Feta");
    greeting.add("Anari");
    greeting.add("Mozzarella");
    greeting.add("Camembert");
    greeting.add("Roquefort");
    greeting.add("Manouri");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
  //  String greeting = greeting.get((int) (Math.random() * greeting.size()));

    String json = convertToJson(greeting);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);

    response.setContentType("text/html;");
    response.getWriter().println("<h1>Hello Eleni!</h1>");
  }

   private String convertToJson(ServerStats serverStats) {
    String json = "{";
    json += { "cheese":"Halloumi", "best": "grilled", "age":1 };
    json += "}";
    return json;
  }

}

