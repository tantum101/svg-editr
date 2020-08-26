System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      var lang_ptBR = exports('default', {
        lang: 'pt-BR',
        dir: 'ltr',
        common: {
          ok: 'OK',
          cancel: 'Cancelar',
          key_backspace: 'Tecla backspace',
          key_del: 'Tecla delete',
          key_down: 'Seta para baixo',
          key_up: 'Seta para cima',
          more_opts: 'Mais opções',
          url: 'URL',
          width: 'Largura',
          height: 'Altura'
        },
        misc: {
          powered_by: 'Tecnologia'
        },
        ui: {
          toggle_stroke_tools: 'Mais opções de traço',
          palette_info: 'Click para mudar a cor de preenchimento, shift-click para mudar a cor do traço',
          zoom_level: 'Mudar zoom',
          panel_drag: 'Arraste para redimensionar o painel',
          quality: 'Quality:',
          pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
          pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
          pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
          pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
        },
        properties: {
          id: 'Identifica o elemento',
          fill_color: 'Mudar a cor de preenchimento',
          stroke_color: 'Mudar a cor do traço',
          stroke_style: 'Mudar o estilo do traço',
          stroke_width: 'Mudar a espessura do traço em 1, shift-click para mudar 0.1',
          pos_x: 'Mudar a coordenada X',
          pos_y: 'Mudar a coordenada Y',
          linecap_butt: 'Estilo do fim do traço: Topo',
          linecap_round: 'Estilo do fim do traço: Redondo',
          linecap_square: 'Estilo do fim do traço: Quadrado',
          linejoin_bevel: 'Estilo da Aresta: Chanfro',
          linejoin_miter: 'Estilo da Aresta: Reto',
          linejoin_round: 'Estilo da Aresta: Redondo',
          angle: 'Mudar ângulo de rotação',
          blur: 'Mudar valor de desfoque',
          opacity: 'Mudar opacidade do item selecionado',
          circle_cx: 'Mudar a coordenada cx do círculo',
          circle_cy: 'Mudar a coordenada cy do círculo',
          circle_r: 'Mudar o raio do círculo',
          ellipse_cx: 'Mudar a coordenada cx da elípse',
          ellipse_cy: 'Mudar a coordenada cy da elípse',
          ellipse_rx: 'Mudar o raio x da elípse',
          ellipse_ry: 'Mudar o raio y da elípse',
          line_x1: 'Mudar a coordenada x do início da linha',
          line_x2: 'Mudar a coordenada x do fim da linha',
          line_y1: 'Mudar a coordenada y do início da linha',
          line_y2: 'Mudar a coordenada y do fim da linha',
          rect_height: 'Mudar a altura do retângulo',
          rect_width: 'Mudar a largura do retângulo',
          corner_radius: 'Mudar o raio da aresta do retângulo',
          image_width: 'Mudar a largura da imagem',
          image_height: 'Mudar a altura da imagem',
          image_url: 'Mudar URL',
          node_x: 'Mudar a coordenada x da aresta',
          node_y: 'Mudar a coordenada y da aresta',
          seg_type: 'Mudar o tipo de segmento',
          straight_segments: 'Reto',
          curve_segments: 'Curvo',
          text_contents: 'Mudar conteúdo do texto',
          font_family: 'Mudar o estilo da fonte',
          font_size: 'Mudar o tamanho da fonte',
          bold: 'Negrito',
          italic: 'Italico'
        },
        tools: {
          main_menu: 'Menu Principal',
          bkgnd_color_opac: 'Mudar cor/opacidade do fundo',
          connector_no_arrow: 'Sem flecha',
          fitToContent: 'Ajustar ao conteúdo',
          fit_to_all: 'Ajustar a todo conteúdo',
          fit_to_canvas: 'Ajustar à tela',
          fit_to_layer_content: 'Ajustar ao conteúdo da camada',
          fit_to_sel: 'Ajustar à seleção',
          align_relative_to: 'Alinhar em relação à ...',
          relativeTo: 'Referência:',
          page: 'página',
          largest_object: 'maior objeto',
          selected_objects: 'objetos selecionados',
          smallest_object: 'menor objeto',
          new_doc: 'Nova imagem',
          open_doc: 'Abrir imagem',
          export_img: 'Export',
          save_doc: 'Salvar imagem',
          import_doc: 'Importar SVG',
          align_to_page: 'Alinhar elemento na página',
          align_bottom: 'Alinhar no fundo',
          align_center: 'Alinhar no centro',
          align_left: 'Alinhar na esquerda',
          align_middle: 'Alinhar no meio',
          align_right: 'Alinhar na direita',
          align_top: 'Alinhar no topo',
          mode_select: 'Selecão',
          mode_fhpath: 'Lápis',
          mode_line: 'Linha',
          mode_rect: 'Retângulo',
          mode_square: 'Quadrado',
          mode_fhrect: 'Retângulo a mão-livre',
          mode_ellipse: 'Elípse',
          mode_circle: 'Círculo',
          mode_fhellipse: 'Elípse a mão-livre',
          mode_path: 'Contorno',
          mode_text: 'Texto',
          mode_image: 'Imagem',
          mode_zoom: 'Zoom',
          no_embed: 'Atenção: Esta imagem não pode ser incorporada e dependerá de seu caminho para ser exibida',
          undo: 'Desfazer',
          redo: 'Refazer',
          tool_source: 'Editar o código',
          wireframe_mode: 'Modo linhas',
          clone: 'Clonar Elemento(s)',
          del: 'Deletar Elemento(s)',
          group_elements: 'Agrupar Elementos',
          make_link: 'Criar (hyper)link',
          set_link_url: 'Alterar URL (em branco para remover)',
          to_path: 'Converter para Contorno',
          reorient_path: 'Reorientar contorno',
          ungroup: 'Desagrupar Elementos',
          docprops: 'Propriedades',
          editor_homepage: 'SVG-Edit Home Page',
          move_bottom: 'Mover para o fundo',
          move_top: 'Mover para o topo',
          node_clone: 'Clonar Aresta',
          node_delete: 'Deletar Aresta',
          node_link: 'Alinhar pontos de controle',
          add_subpath: 'Adicionar contorno',
          openclose_path: 'Abrir/Fechar contorno',
          source_save: 'Salvar',
          cut: 'Recortar',
          copy: 'Copiar',
          paste: 'Colar',
          paste_in_place: 'Colar no mesmo local',
          delete: 'Deletar',
          group: 'Agrupar',
          move_front: 'Trazer para Frente',
          move_up: 'Avançar',
          move_down: 'Recuar',
          move_back: 'Enviar para Trás'
        },
        layers: {
          layer: 'Camada',
          layers: 'Camadas',
          del: 'Deletar Camada',
          move_down: 'Enviar Camada para Trás',
          new: 'Nova Camada',
          rename: 'Renomear Camada',
          move_up: 'Trazer Camada para Frente',
          dupe: 'Duplicar Camada',
          merge_down: 'Achatar para baixo',
          merge_all: 'Achatar todas',
          move_elems_to: 'Mover elementos para:',
          move_selected: 'Mover elementos selecionados para outra camada'
        },
        config: {
          image_props: 'Propriedades',
          doc_title: 'Título',
          doc_dims: 'Dimensões',
          included_images: 'Imagens',
          image_opt_embed: 'Incorporadas (arquivos locais)',
          image_opt_ref: 'Usar referência',
          editor_prefs: 'Preferências',
          icon_size: 'Tamanho dos ícones',
          language: 'Idioma',
          background: 'Fundo da página',
          editor_img_url: 'URL da Imagem',
          editor_bg_note: 'Atenção: Fundo da página não será salvo.',
          icon_large: 'Grande',
          icon_medium: 'Médio',
          icon_small: 'Pequeno',
          icon_xlarge: 'Extra Grande',
          select_predefined: 'Modelos:',
          units_and_rulers: 'Unidade & Réguas',
          show_rulers: 'Mostrar réguas',
          base_unit: 'Unidade base:',
          grid: 'Grade',
          snapping_onoff: 'Snap on/off',
          snapping_stepsize: 'Intensidade do Snap:'
        },
        notification: {
          invalidAttrValGiven: 'Valor inválido',
          noContentToFitTo: 'Não há conteúdo',
          dupeLayerName: 'Nome duplicado',
          enterUniqueLayerName: 'Insira um nome único',
          enterNewLayerName: 'Insira um novo nome',
          layerHasThatName: 'A camada já pussui este nome',
          QmoveElemsToLayer: 'Mover elementos selecionados para a camada: \'%s\'?',
          QwantToClear: 'Deseja criar um novo arquivo?\nO histórico também será apagado!',
          QwantToOpen: 'Deseja abrir um novo arquivo?\nO histórico também será apagado!',
          QerrorsRevertToSource: 'Foram encontrados erros ná análise do código SVG.\nReverter para o código SVG original?',
          QignoreSourceChanges: 'Ignorar as mudanças no código SVG?',
          featNotSupported: 'Recurso não suportado',
          enterNewImgURL: 'Insira nova URL da imagem',
          defsFailOnSave: 'Atenção: Devido a um bug em seu navegador, esta imagem pode apresentar erros, porém será salva corretamente.',
          loadingImage: 'Carregando imagem, por favor aguarde...',
          saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
          noteTheseIssues: 'Atenção para as seguintes questões: ',
          unsavedChanges: 'Existem alterações não salvas.',
          enterNewLinkURL: 'Insira novo URL do hyperlink',
          errorLoadingSVG: 'Erro: Impossível carregar dados SVG',
          URLLoadFail: 'Impossível carregar deste URL',
          retrieving: 'Retrieving \'%s\' ...',
          popupWindowBlocked: 'Popup window may be blocked by browser',
          exportNoBlur: 'Blurred elements will appear as un-blurred',
          exportNoforeignObject: 'foreignObject elements will not appear',
          exportNoDashArray: 'Strokes will appear filled',
          exportNoText: 'Text may not appear as expected'
        }
      });

    }
  };
});
